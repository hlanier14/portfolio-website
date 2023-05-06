import React, { useState } from 'react';
import { Line, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import moment from 'moment';


function DividendAnalysisCard({ item }) {

    const { ticker, shortName, price, dividends, ddm, requiredRate, financials } = item;
    const [chartType, setChartType] = useState('price');

    const handleChartToggle = () => {
      setChartType(chartType === 'dividends' ? 'price' : 'dividends');
    };

    // click on model output to show work
    
    return (
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className='mt-4 grid grid-cols-5'>
                <div className='col-span-3'>
                    <h2 className="text-xl font-bold">{shortName}</h2>
                    <p className="text-gray-600">{ticker}</p>
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <p className="text-lg font-medium text-gray-800">${price.last.toFixed(2)}</p>
                </div>
                <div className='col-span-1 bg-green-100 flex items-center justify-center rounded-lg'>
                    <p className="mx-2 text-lg font-medium text-gray-800">${ddm.value.toFixed(2)}</p>
                    <p className="text-md font-medium text-green-900">(&uarr;{(ddm.pctChange * 100).toFixed(2)}%)</p>
                </div>
            </div>
            <div className="h-1/4 mt-5 grid grid-cols-5 text-gray-600 gap-10">
                <div className='col-span-3'>
                    {/* <div className='mt-4'>
                        <button className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-gray-400" onClick={handleChartToggle}>
                            {chartType === 'dividends' ? 'Show Price Chart' : 'Show Dividend Chart'}
                        </button>
                    </div> */}
                    <div className='h-full flex justify-center items-center'>
                        { chartType === 'dividends' ? (
                            <Bar data={{
                                labels: dividends.historical.map(dividend => moment(dividend.date).format("MMM 'YY")),
                                datasets: [{
                                    label: 'Dividends',
                                    data: dividends.historical.map(dividend => dividend.dividend),
                                    backgroundColor: 'rgba(20, 115, 230, 0.75)',
                                    borderColor: 'rgba(20, 115, 230, 1)',
                                    borderWidth: 1
                                }]
                            }} options={{
                                plugins: {
                                    title: {
                                        // display: true,
                                        text: "Historical Dividends"
                                    },
                                    legend: {
                                        display: false
                                    }
                                },
                                maintainAspectRatio: false,
                                responsive: true,
                                scales: {
                                    x: {
                                        ticks: {
                                            maxTicksLimit: 5,
                                            maxRotation: 0,
                                            autoSkip: true
                                        }
                                    }
                                }
                            }} />
                        ) : (
                            <Line data={{ 
                                labels: price.historical.map(price => moment(price.date).format("MMM 'YY")),
                                datasets: [{
                                    label: "Price",
                                    data: price.historical.map(price => price.price),
                                    borderColor: "rgba(20, 115, 230, 1)",
                                    borderWidth: 1,
                                    pointRadius: 0,
                                    fill: true,
                                    backgroundColor: (context) => {
                                        const ctx = context.chart.ctx;
                                        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                                        gradient.addColorStop(0, 'rgba(20, 115, 230, 1)');
                                        gradient.addColorStop(1, 'rgba(20, 115, 230, 0)');
                                        return gradient;
                                    }                                      
                                }]
                            }} options={{
                                hover: {
                                    mode: 'index',
                                    intersect: false
                                },
                                plugins: {
                                    corsair: {
                                        color: 'black',
                                    },
                                    title: {
                                        // display: true,
                                        text: "Historical Price"
                                    },
                                    legend: {
                                        display: false
                                    },
                                    tooltip: {
                                        enabled: true,
                                        mode: 'nearest',
                                        intersect: false,
                                        callbacks: {
                                        //   label: function(tooltipItem, data) {
                                        //     var label = data[tooltipItem.index].date;
                                        //     var value = data[tooltipItem.index].price;
                                        //     return label + ': $' + value.toFixed(2);
                                        //   }
                                        }
                                    }
                                },
                                maintainAspectRatio: false,
                                responsive: true,
                                scales: {
                                    x: {
                                        ticks: {
                                            maxTicksLimit: 10,
                                            maxRotation: 0,
                                            autoSkip: true
                                        }
                                    }
                                }
                            }} plugins={{
                                id: 'corsair',
                                defaults: {
                                    width: 1,
                                    color: '#FF4949',
                                    dash: [3, 3],
                                },
                                afterInit: (chart, args, opts) => {
                                    chart.corsair = {
                                        x: 0,
                                        y: 0
                                    }
                                },
                                afterEvent: (chart, args) => {
                                    const {inChartArea} = args
                                    const {type,x,y} = args.event
                                    chart.corsair = {x, y, draw: inChartArea}
                                    chart.draw()
                                },
                                beforeDatasetsDraw: (chart, args, opts) => {
                                    const {ctx} = chart
                                    const {top, bottom, left, right} = chart.chartArea
                                    const {x, y, draw} = chart.corsair
                                    if (!draw) return
                            
                                    ctx.save()
                                    ctx.beginPath()
                                    ctx.lineWidth = opts.width
                                    ctx.strokeStyle = opts.color
                                    ctx.setLineDash(opts.dash)
                                    ctx.moveTo(x, bottom)
                                    ctx.lineTo(x, top)
                                    ctx.moveTo(left, y)
                                    ctx.lineTo(right, y)
                                    ctx.stroke()
                                    ctx.restore()
                                }
                            }} />
                        )}
                    </div>
                </div>
                <div className='col-span-2 '>
                    <div className='mt-4 grid grid-cols-2'>
                        <div className='text-left whitespace-nowrap'>
                            <p>Dividend (FWD):</p>
                            <p>Dividend Yield:</p>
                            <p>Ex-Dividend:</p>
                            <p>Payout Ratio:</p>
                            <p>EPS (FWD):</p>
                            <p>PE (FWD):</p>
                            <p>Dividend Growth Rate 5Y (CAGR):</p>
                            <p>Consecutive Dividend Growth:</p>
                        </div>
                        <div className='text-right'>
                            <p>{(dividends.last * dividends.metadata.dividendFrequency).toFixed(2)}</p>
                            <p>{((dividends.last * dividends.metadata.dividendFrequency) / price.last * 100).toFixed(2)}%</p>
                            <p>{moment(financials.exDividend).format('MMM D, YYYY')}</p>
                            <p>{(financials.payoutRatio * 100).toFixed(2)}%</p>
                            <p>{financials.forwardEps.toFixed(2)}</p>
                            <p>{financials.forwardPE.toFixed(2)}</p>
                            <p>{(dividends.metadata.fiveYearCAGR * 100).toFixed(2)}%</p>
                            <p>{dividends.metadata.consecutiveYears} years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DividendAnalysisCard;