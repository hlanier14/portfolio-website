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

    const [loading, setLoading] = useState(true);

    // 
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios("https://lending-m7dl7jaevq-uc.a.run.app/protocols/daily");
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
        uniqueProtocols.forEach(protocol => {
            const protocolDataFiltered = networkData.filter(entry => entry.protocol === protocol);
            protocolDataFiltered.forEach(entry => {
                rates.push({
                    x: entry.data.map(point => point.date),
                    y: entry.data.map(point => point.supplyAPR),
                    type: 'scatter',
                    mode: 'lines',
                    name: `${entry.asset}`,
                    marker: { 
                        color: getRandomColor() 
                    },
                    line: {
                        dash: marker[protocol]
                    }
                });
            });
        });
        setRateData(rates)
    }, [selectedNetwork]);

    const rateLayout = {
        title: `${selectedNetwork}`,
        yaxis: { title: 'Supply APR (%)' },
    };

    const marker = {
        "compound": "dash",
        "aave": "solid"
    }
    const color = {
        "polygon-mainnet": "red",
        "optimism-mainnet": "blue",
        "arbitrum-mainnet": "orange",
        "avalanche-mainnet": "green"
    }
    const overlayData = [];
    protocolData.forEach(entry => {
        overlayData.push({
            x: entry.data.map(point => point.date),
            y: entry.data.map(point => point.supplyAPR),
            type: 'scatter',
            mode: 'lines',
            name: `${entry.asset}`,
            marker: { 
                color: color[entry.network]
            },
            line: {
                dash: marker[entry.protocol]
            }
        });
    });
    const overlayLayout = {
        title: 'All Networks',
        yaxis: { title: 'Supply APR (%)' },
    };

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
                        <div className='mt-5 mb-24'>
                            <Plot data={rateData} layout={rateLayout} />
                        </div>
                        <div className='mt-5 mb-24'>
                            <Plot data={overlayData} layout={overlayLayout} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lending;