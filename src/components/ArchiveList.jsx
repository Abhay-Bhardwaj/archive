'use client'
import { GET_ARCHIVE_DATA } from '@/helper/ApolloClient';
import { useQuery } from '@apollo/client';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ArchiveCard from './ArchiveCard';

export default function ArchiveList({ searchTerm, users }) {
  const [finalData, setFinalData] = useState([]);
  const [pagnatedData, setPagnatedData] = useState([]);
  const [pagination, setPagination] = useState(1);
  const perPageArticle = 10;

  const { loading, error, data } = useQuery(GET_ARCHIVE_DATA, {
    variables: { albumsPage: 1, limit: 100 },
  });

  useEffect(() => {
    if (data) {
      let currentData = data.albums.data;
      if (searchTerm) {
        currentData = currentData.filter((album) =>
          album.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setFinalData(currentData);
    }
  }, [data, searchTerm]);

  useEffect(() => {
    const startIndex = (pagination - 1) * perPageArticle;
    const endIndex = pagination * perPageArticle;
    setPagnatedData(finalData.slice(startIndex, endIndex));
  }, [pagination, finalData, perPageArticle]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='w-full h-full bg-slate-100 p-2 rounded-md'>
      <h1 className='font-bold text-xl'>Archives</h1>
      <hr />
      {loading ? (
        <Loader2 className="animate-spin w-20 h-20 " />
      ) : (
        <div className='flex flex-wrap justify-center'>
          {pagnatedData.map((album) => {
            return <ArchiveCard key={album.id} data={album} />;
          })}
        </div>
      )}
      <div className='flex flex-row justify-center'>
        <button
          onClick={() => setPagination(pagination - 1)}
          disabled={pagination === 1 || pagnatedData.length === 0}
          className='bg-blue-500 disabled:bg-blue-200 p-2 rounded-md'
        >
          <ArrowLeft />
        </button>
        <span className='p-2'>{pagination}</span>
        <button
          onClick={() => setPagination(pagination + 1)}
          disabled={
            pagination === Math.ceil(finalData.length / perPageArticle) || pagnatedData.length === 0
          }
          className='bg-blue-500 disabled:bg-blue-200 p-2 rounded-md'
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
