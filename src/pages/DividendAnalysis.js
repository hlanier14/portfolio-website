import React, { useEffect, useState } from 'react';
import DividendAnalysisCard from '../components/DividendAnalysisCard';
import axios from 'axios';
import moment from 'moment';
import 'moment-timezone';

function DividendAnalysis() {
    const [data, setData] = useState([]);
    const [benchmarks, setBenchmarks] = useState({});
    const [updated, setUpdated] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const [itemsPerPage] = useState(25);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://dividend-stock-analysis-qkncq25ynq-uc.a.run.app/model'
        );
        const sortedData = result.data.companies.filter(item => item.valuation > 0).filter(item => item.pctChange > 0).sort((a, b) => a.pctChange - b.pctChange);
        setData(sortedData);
        setBenchmarks(result.data.benchmarks);
        const momentUtc = moment.utc(result.data.lastUpdated, moment.ISO_8601);
        const momentCt = momentUtc.tz('America/Chicago');
        const formattedDate = momentCt.format('MMMM Do, YYYY [at] h:mm:ss A');
        setUpdated(formattedDate);
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
      <div className="bg-slate-100">
        <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex flex-col items-center justify-center pt-7 mb-5'>
            <div className='text-3xl md:text-4xl font-bold mb-2 text-center '>
              Dividend Stock Analysis
            </div>
            <div className='indent-8 text-left'>
            This project uses the Gordon Growth Model to find undervalued dividend-paying stocks in the S&P 500. All data is from Yahoo Finance. Check out the code for the backend <a 
                href="https://github.com/hlanier14/dividend-stock-analysis" 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-500 hover:text-white"
            >
                here
            </a>!
          </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 gap-5">
                  <div className='text-sm text-gray-400'>
                    Last Updated: {updated} (CT)
                  </div>
                  {currentItems.map((item) => (
                    <DividendAnalysisCard item={item} benchmarks={benchmarks} key={item.ticker} />
                  ))}
              </div>
            )}
          </div>
          <div className="flex justify-center py-10">
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
      </div>
    )
}

export default DividendAnalysis;