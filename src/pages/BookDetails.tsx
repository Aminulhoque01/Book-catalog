import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../redux/books/bookApi';
import React from 'react'

export default function BookDetails() {
  const { id } = useParams();
 
  const {data:book,isLoading,error}=useSingleBookQuery(id);

  

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-sm">Rating: {book?.description}</p>
          <p className="text-xl">Rating: {book?.rating}</p>
          <p className="text-xl">Rating: {book?.rating}</p>
          <h3 className="text-1xl font-semibold">{book?.author}</h3>
          <p className="text-sm">Rating: {book?.publication}</p>
        </div>
      </div>
      
    </>
  );
}
