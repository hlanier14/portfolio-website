import React, { useState } from 'react';
import { Line, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import moment from 'moment';


function DividendAnalysisCard({ item, benchmarks }) {

    const [chartType, setChartType] = useState('price');
    const [isExplanationOpen, setIsExplanationOpen] = useState(false);

    return (
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 mx-5">
            <div className='grid grid-cols-2 md:grid-cols-5'>
                <div className='col-span-2 md:col-span-3 flex flex-col items-start justify-center mb-4'>
                    <div className='flex items-center justify-left'>
                        <div className="text-xl font-bold">{item.longName}</div>
                        <div className="text-gray-600 font-bold ml-2"> ({item.ticker})</div>
                    </div>
                    <div className="text-gray-400">{item.sector}</div>
                </div>
                <div className='md:col-span-1 bg-gray-200 rounded-lg flex flex-col items-center justify-start ml-5 mr-2'>
                    <div className="text-sm font-small text-gray-800 mt-2">Current Price:</div>
                    <div className='p-2'>
                        <div className="text-lg font-medium text-gray-800">${item.lastPrice.toFixed(2)}</div>
                    </div>
                </div>
                <button className='md:col-span-1 bg-green-100 rounded-lg flex flex-col items-center justify-start ml-2 mr-5' onClick={() => setIsExplanationOpen(!isExplanationOpen)}>
                    <div className="text-sm font-small text-gray-800 mt-2">Projected Price:</div>
                    <div className='text-xs p-2 mb-2'>
                        <div className="mx-2 text-lg font-medium text-gray-800">${item.valuation.toFixed(2)}</div>
                        <div className="text-md font-medium text-green-900">(&uarr;{(item.pctChange * 100).toFixed(2)}%)</div>
                    </div>
                </button>
                { isExplanationOpen ? (
                    <div className='col-span-2 md:col-span-5 bg-gray-100 flex flex-col items-center justify-center border-2 border-dashed rounded-lg text-sm md:text-md p-3 mt-3 md:my-3 mx-5'>
                        <div className='mb-2'>Methodology:</div>
                        <div>Required Rate</div>
                        <div>Risk Free Rate + Stock Beta * (Market Rate - Risk Free Rate)</div>
                        <div className='mb-2'>
                            {(benchmarks.riskFreeRate * 100).toFixed(2)}% + {item.fiveYearBeta.toFixed(2)} * ({(benchmarks.marketRate * 100).toFixed(2)}% - {(benchmarks.riskFreeRate * 100).toFixed(2)}%) = {(item.requiredRate * 100).toFixed(2)}%
                        </div>
                        <div>Dividend Discount Model</div>
                        <div>(Last Dividend * Dividend Frequency) / (Required Rate - Dividend Growth Rate)</div>
                        <div>
                            ({item.lastDividend.toFixed(2)} * {item.dividendFrequency.toFixed(0)}) / ({(item.requiredRate * 100).toFixed(2)}% - {(item.fiveYearCAGR * 100).toFixed(2)}%) = ${item.valuation.toFixed(2)}
                        </div>
                    </div>) : (<></>)
                }
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 items-center text-gray-600">
                <div className='col-span-2 md:col-span-3'>
                    <div className='flex justify-center mt-5 md:mt-0'>
                        <div className='w-1/2 md:w-1/3 flex justify-center bg-gray-200 p-1 rounded-lg'>
                            <button className={`w-1/2 text-xs ${
                                            chartType === 'price'
                                            ? 'bg-blue-500'
                                            : 'bg-gray-200 hover:text-blue-500'
                                        } text-white py-1 px-2 rounded`}  
                                    onClick={() => setChartType('price')}>
                                Price
                            </button>
                            <button className={`w-1/2 text-xs ${
                                            chartType === 'dividends'
                                            ? 'bg-blue-500'
                                            : 'bg-gray-200 hover:text-blue-500'
                                        } text-white py-1 px-2 rounded`}
                                    onClick={() => setChartType('dividends')}>
                                Dividends
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 flex justify-center items-center mb-5 md:mb-0'>
                        { chartType === 'dividends' ? (
                            <Bar data={{
                                labels: item.dividendHistory.map(dividend => moment(dividend.date).format("MMM 'YY")),
                                datasets: [{
                                    label: 'Dividends',
                                    data: item.dividendHistory.map(dividend => dividend.dividend),
                                    backgroundColor: 'rgba(20, 115, 230, 0.75)',
                                    borderColor: 'rgba(20, 115, 230, 1)',
                                    borderWidth: 1
                                }]
                            }} options={{
                                plugins: {
                                    title: {
                                        // display: true,
                                        text: "Dividends"
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
                                labels: item.priceHistory.map(price => moment(price.date).format("MMM 'YY")),
                                datasets: [{
                                    label: "Price",
                                    data: item.priceHistory.map(price => price.price),
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
                                            maxTicksLimit: 5,
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
                <div className='col-span-2 md:col-span-2 text-sm md:mx-5'>
                    <div className='md:mt-4 grid grid-cols-2 '>
                        <div className='text-left whitespace-nowrap'>
                            <p>EPS (FWD):</p>
                            <p>PE (FWD):</p>
                            <p>Dividend (FWD):</p>
                            <p>Dividend Yield:</p>
                            <p>Payout Ratio:</p>
                            <p>Dividend Growth Rate 5Y (CAGR):</p>
                            <p>Consecutive Dividend Growth:</p>
                        </div>
                        <div className='text-right'>
                            <p>{item.forwardEps.toFixed(2)}</p>
                            <p>{item.forwardPE.toFixed(2)}</p>
                            <p>{(item.lastDividend * item.dividendFrequency).toFixed(2)}</p>
                            <p>{((item.lastDividend * item.dividendFrequency) / item.lastPrice * 100).toFixed(2)}%</p>
                            <p>{(item.payoutRatio * 100).toFixed(2)}%</p>
                            <p>{(item.fiveYearCAGR * 100).toFixed(2)}%</p>
                            <p>{item.consecutiveYears} years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DividendAnalysisCard;