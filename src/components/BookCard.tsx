import React from 'react'
import { IBook } from '../types/globalTypes';
import { useAppDispatch } from '../redux/hook';
import { toast } from './ui/use-toast';
import { Link } from 'react-router-dom';

interface IProps {
    book: IBook;
  }
  

export default function BookCard({book}:IProps) {
    const dispatch = useAppDispatch();

  
    // const handleAddProduct = (book: IProduct) => {
    //   dispatch(addToCart(book))
    //   toast({
    //     description: 'Product Added',
    //   });
    // };
    return (
      <div>
        <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
          <Link to={`/all-book/${book._id}`} className="w-full">
            <img src={book?.image} alt="product" />
            <h1 className="text-xl font-semibold">{book?.title}</h1>
          </Link>
          <p>Rating: {book?.reviews}</p>
          
          <p className="text-sm">publication-date: {book?.publication}</p>
          <p className="text-sm">
            Author: {book?.author }
          </p>
        </div>
      </div>
    );
}
