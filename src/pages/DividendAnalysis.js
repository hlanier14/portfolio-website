import React, { useEffect, useState } from 'react';
import DividendAnalysisCard from '../components/DividendAnalysisCard';
import axios from 'axios';

function DividendAnalysis() {
    const [data, setData] = useState([]);
    const [benchmarks, setBenchmarks] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const [itemsPerPage] = useState(25);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://dividend-stock-analysis-qkncq25ynq-uc.a.run.app/valuations'
        );
        const sortedData = result.data.companies.filter(item => item.valuation > 0).filter(item => item.pctChange > 0).sort((a, b) => a.pctChange - b.pctChange);
        setData(sortedData);
        setBenchmarks(result.data.benchmarks)
        setLoading(false);
      };
      fetchData();
    }, []);
  
    useEffect(() => {
        setCurrentItems(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
      }, [currentPage, data, itemsPerPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
  
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="w-full h-full min-h-screen pb-36 pt-20">
          <div className='flex flex-col items-center justify-center p-7'>
            <div className='text-5xl mb-3'>
              Dividend Stock Analysis
            </div>
            <div className='text-2xl mb-10'>
              Using the Dividend Discount Model to find undervalued stocks in the S&P 500
            </div>
            <div className='text-lg'>
              Required Rate = Risk Free Rate + Stock Beta * (Market Rate - Risk Free Rate)
            </div>
            <div className='text-lg'>
              Dividend Discount Model = (Last Dividend * Dividend Frequency) / (Required Rate - Dividend Growth Rate)
            </div>
          </div>
          <div className='flex justify-center'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:w-2/3">
                {currentItems.map((item) => (
                  <DividendAnalysisCard item={item} benchmarks={benchmarks} key={item.ticker} />
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
              {pageNumbers.map((number) => (
                  <button
                      className={`px-4 py-2 mx-2 rounded-full ${
                      currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                      key={number}
                      onClick={() => paginate(number)}
                  >
                      {number}
                  </button>
              ))}
          </div>
        </div>
    )
}

export default DividendAnalysis;