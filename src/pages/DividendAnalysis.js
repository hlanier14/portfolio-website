import React, { useEffect, useState } from 'react';
import DividendAnalysisCard from '../components/DividendAnalysisCard';
import axios from 'axios';

function DividendAnalysis() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const [itemsPerPage] = useState(25);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://us-central1-portfolio-website-378500.cloudfunctions.net/dividend-stock-api'
        );
        const sortedData = result.data.filter(item => item.ddm.value > 0).filter(item => item.ddm.pctChange > 0).sort((a, b) => b.ddm.pctChange - a.ddm.pctChange);
        setData(sortedData);
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
        <div class="flex flex-col items-center justify-center w-full h-full pb-36">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:w-2/3">
                {currentItems.map((item) => (
                  <DividendAnalysisCard item={item} key={item.ticker} />
                ))}
              </div>
            )}
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