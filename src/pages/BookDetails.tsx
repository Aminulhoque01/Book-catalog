import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useDeleteBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
} from '../redux/books/bookApi';
import React from 'react';
import { Button } from '../components/ui/button';
import { useAppDispatch } from '../redux/hook';
import { IBook } from '../types/globalTypes';
import { toast } from '../components/ui/use-toast';
import OpenModal from './OpenModal';

export default function BookDetails() {
  const [inputValue, setInputValue] = useState<string>('');
  // const {data} = useGetCommentQuery({refetchOnMountOrArgChange:true,pollingInterval:30000});

  const { id } = useParams();

  const { data: book, isLoading, error } = useSingleBookQuery(id);

  const dispatch = useAppDispatch();

  const handleEditBook = (_book: IBook) => {
    // dispatch(addToCart(product))
    // toast({
    //   description: 'Product Added',
    // });
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-sm">Rating: {book?.details}</p>
          <p className="text-xl">Rating: {book?.reviews}</p>
          <p className="text-xl">Genre: {book?.Genre}</p>
          <h3 className="text-1xl font-semibold">Author: {book?.author}</h3>
          <p className="text-sm">publication-date: {book?.publication}</p>
          <br />
          <br />

          <button className="btn" >
            Edit book
          </button>
          
          <Button variant="default">Delete book</Button>
        </div>
        
        <OpenModal></OpenModal>
      </div>
    </>
  );
}
