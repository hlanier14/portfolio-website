import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Lending() {

    const [protocolData, setProtocolData] = useState([]);

    const [uniqueProtocols, setUniqueProtocols] = useState([]);
    const [uniqueNetworks, setUniqueNetworks] = useState([])
    
    const [selectedNetwork, setSelectedNetwork] = useState('');
    const [rateData, setRateData] = useState([]);
    const [supplyData, setSupplyData] = useState([]);
    const [borrowData, setBorrowData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
        const fetchData = async () => {
            const baseUrl = 'https://lending-m7dl7jaevq-uc.a.run.app'
            // const baseUrl = 'http://localhost:3030'
            const response = await axios(`${baseUrl}/protocols/daily`);
            const data = response.data;
            setProtocolData(data);
            const networks = [...new Set(data.map(entry => entry.network))];
            setUniqueNetworks(networks);
            const protocols = [...new Set(data.map(entry => entry.protocol))];
            setUniqueProtocols(protocols);
            setSelectedNetwork('polygon-mainnet')
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const networkData = protocolData.filter(entry => entry.network === selectedNetwork);
        const marker = {
            "compound": "dash",
            "aave": "solid"
        }
        const rates = [];
        const supply = [];
        const borrow = [];
        uniqueProtocols.forEach(protocol => {
            const protocolDataFiltered = networkData.filter(entry => entry.protocol === protocol);
            protocolDataFiltered.forEach(entry => {
                const color = getRandomColor();
                const design = {
                    x: entry.data.map(point => point.date),
                    type: 'scatter',
                    mode: 'lines',
                    name: `${entry.asset}`,
                    marker: { 
                        color: color
                    },
                    line: {
                        dash: marker[protocol]
                    }
                }
                rates.push({
                    y: entry.data.map(point => point.supplyAPR),
                    ...design
                });
                supply.push({
                    y: entry.data.map(point => point.totalSupply),
                    ...design
                });
                borrow.push({
                    y: entry.data.map(point => point.totalBorrow),
                    ...design
                });
            });
        });
        setRateData(rates)
        setSupplyData(supply)
        setBorrowData(borrow)
    }, [selectedNetwork]);

    const color = {
        "polygon-mainnet": "red",
        "optimism-mainnet": "blue",
        "arbitrum-mainnet": "orange",
        "avalanche-mainnet": "green"
    }
    const avgRateData = [];
    const totalSupplyData = [];
    const totalBorrowData = [];
    uniqueNetworks.forEach(network => {
        const networkData = protocolData.filter(entry => entry.network === network);
        const maxDataLength = Math.max(...networkData.map(entry => entry.data.length));
        const avgRates = Array.from({ length: maxDataLength }, (_, index) => {
            let weightedSum = 0;
            let totalSupplySum = 0;
            networkData.forEach(entry => {
                if (entry.data[index]) {
                    const weight = entry.data[index].totalSupply / networkData.reduce((acc, curr) => acc + (curr.data[index] ? curr.data[index].totalSupply : 0), 0);
                    weightedSum += entry.data[index].supplyAPR * weight;
                    totalSupplySum += weight;
                }
            });
            return totalSupplySum > 0 ? weightedSum / totalSupplySum : 0;
        });        
        const totalSupply = Array.from({ length: maxDataLength }, (_, index) => {
            const values = networkData.map(entry => entry.data[index] ? entry.data[index].totalSupply : 0);
            return values.reduce((acc, curr) => acc + curr, 0);
        });
        const totalBorrow = Array.from({ length: maxDataLength }, (_, index) => {
            const values = networkData.map(entry => entry.data[index] ? entry.data[index].totalBorrow : 0);
            return values.reduce((acc, curr) => acc + curr, 0);
        });
        const design = {
            type: 'scatter',
            mode: 'lines',
            name: `${network}`,
            marker: { 
                color: color[network]
            }
        }
        avgRateData.push({
            x: avgRates.map((_, index) => networkData[0].data[index] ? networkData[0].data[index].date : null),
            y: avgRates,
            ...design
        });
        totalSupplyData.push({
            x: totalSupply.map((_, index) => networkData[0].data[index] ? networkData[0].data[index].date : null),
            y: totalSupply,
            ...design
        });
        totalBorrowData.push({
            x: totalBorrow.map((_, index) => networkData[0].data[index] ? networkData[0].data[index].date : null),
            y: totalBorrow,
            ...design
        });
    });

    return (
        <div className="bg-slate-100">
            <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {loading ? (
                    <div className='flex justify-center self-end pt-10'>Loading...</div>
                ) : (
                    <div className='grid justify-items-center pt-10'>
                        <select 
                            value={selectedNetwork} 
                            onChange={(event) => { setSelectedNetwork(event.target.value) }}
                        >
                            {uniqueNetworks.map(network => (
                                <option key={network} value={network}>{network}</option>
                            ))}
                        </select>
                        <div className='mt-5 mb-24 space-y-5'>
                            <div>
                                <Plot 
                                    data={rateData} 
                                    layout={{
                                        title: 'Supply APR',
                                        yaxis: { title: '%' },
                                    }} 
                                />
                            </div>
                            <div>
                                <Plot 
                                    data={supplyData} 
                                    layout={{
                                        title: 'Total Supply',
                                        yaxis: { title: '$' },
                                    }} 
                                />
                            </div>
                            <div>
                                <Plot 
                                    data={borrowData} 
                                    layout={{
                                        title: 'Total Borrow',
                                        yaxis: { title: '$' },
                                    }} 
                                />
                            </div>
                        </div>
                        <div className='mb-48 space-y-5'>
                            <div className='text-center text-xl'>
                                All Networks
                            </div>
                            <div>
                                <Plot 
                                    data={avgRateData} 
                                    layout={{
                                        title: 'Weighted Average Supply APR',
                                        yaxis: { title: '%' },
                                    }} 
                                />
                            </div>
                            <div>
                                <Plot 
                                    data={totalSupplyData} 
                                    layout={{
                                        title: 'Total Supply',
                                        yaxis: { title: '$' },
                                    }}
                                />
                            </div>
                            <div>
                                <Plot 
                                    data={totalBorrowData} 
                                    layout={{
                                        title: 'Total Borrow',
                                        yaxis: { title: '$' },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lending;