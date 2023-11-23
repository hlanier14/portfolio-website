import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Lending() {

    const [protocolRates, setProtocolRates] = useState([]);
    const [protocolBalances, setProtocolBalances] = useState([]);
    const [accountBalances, setAccountBalances] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const protocolRates = await axios("https://lending-qkncq25ynq-uc.a.run.app/protocols/rates");
        const protocolBalances = await axios("https://lending-qkncq25ynq-uc.a.run.app/protocols/balances");
        const accountBalances = await axios("https://lending-qkncq25ynq-uc.a.run.app/accounts/balances");
        setProtocolRates(protocolRates.data);
        setProtocolBalances(protocolBalances.data);
        setAccountBalances(accountBalances.data);
        setLoading(false);
      };
      fetchData();
    }, []);

    return (
        <div className="bg-slate-100">
            <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {loading ? (
                    <div className='flex justify-center self-end pt-10'>Loading...</div>
                ) : (
                    <div className='grid justify-items-center'>
                        <div className='flex justify-center self-end mt-10'>
                            <div className='mr-10'>
                                Total Account Balance: 
                            </div>
                            <div className=''>
                                ${(accountBalances.usdcToUsd + accountBalances.maticToUsd + protocolBalances[0].suppliedAssets + protocolBalances[1].suppliedAssets).toFixed(2)}
                            </div>
                        </div>
                        <div className='self-end mt-10 mb-10'>
                            Account Balance
                        </div>
                        <div className='grid grid-cols-4 grid-rows-3 space-y-2 self-start max-w-screen md:w-1/2 justify-items-center'>
                            <div></div>
                            <div>
                                Balance
                            </div>
                            <div>
                                Price
                            </div>
                            <div>
                                In USD
                            </div>
                            <div className='flex'>
                                <img
                                    src="/wmatic.svg"
                                    alt="Matic Logo"
                                    className="w-10 h-10 self-center"
                                />
                                <div className='ml-2 self-center'>
                                    MATIC
                                </div>                                         
                            </div>
                            <div className='flex self-center'>
                                {(accountBalances.maticBalance).toFixed(4)}
                            </div>
                            <div className='flex self-center'>
                                ${(accountBalances.maticPrice).toFixed(2)}
                            </div>
                            <div className='flex self-center'>
                                ${(accountBalances.maticToUsd).toFixed(2)}
                            </div>
                            <div className='flex'>
                                <img
                                    src="/usdc.svg"
                                    alt="USDC Logo"
                                    className="w-10 h-10 self-center"
                                />
                                <div className='ml-2 self-center'>
                                    USDC
                                </div>                                         
                            </div>
                            <div className='flex self-center'>
                                {(accountBalances.usdcBalance).toFixed(4)}
                            </div>
                            <div className='flex self-center'>
                                ${(accountBalances.usdcPrice).toFixed(2)}
                            </div>
                            <div className='flex self-center'>
                                ${(accountBalances.usdcToUsd).toFixed(2)}
                            </div>
                        </div>
                        <div className='self-end mt-10 mb-10'>
                            Supply Balance
                        </div>
                        <div className='grid grid-cols-3 grid-rows-3 md:gap-5 space-y-5 max-w-screen self-start justify-items-center'>
                            <div></div>
                            <div>
                                Interest Rate
                            </div>
                            <div>
                                Balance
                            </div>
                            <img
                                src="/aaveLogo.svg"
                                alt="Aave Logo"
                                className="w-24 md:w-32 h-auto mr-20"
                            />  
                            <div className='flex self-center'>
                                {(protocolRates[1].supplyAPR * 100).toFixed(2)}%
                            </div>
                            <div className='flex self-center'>
                                ${(protocolBalances[1].suppliedAssets).toFixed(2)}
                            </div>
                            <img
                                src="/compoundLogo.png"
                                alt="Compound Logo"
                                className="w-24 md:w-32 h-auto mr-20"
                            />   
                            <div className='flex self-center'>
                                {(protocolRates[0].supplyNetAPR * 100).toFixed(2)}%
                            </div>
                            <div className='flex self-center'>
                                ${(protocolBalances[0].suppliedAssets).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lending;