import React from 'react'
import { IProduct } from '../types/globalTypes';
import { useAppDispatch } from '../redux/hook';
import { toast } from './ui/use-toast';
import { Link } from 'react-router-dom';

interface IProps {
    book: IProduct;
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
          <Link to={`/product-details/${book._id}`} className="w-full">
            <img src={book?.image} alt="product" />
            <h1 className="text-xl font-semibold">{book?.name}</h1>
          </Link>
          <p>Rating: {book?.rating}</p>
          <p className="text-sm">
            Availability: {book?.status ? 'In stock' : 'Out of stock'}
          </p>
          <p className="text-sm">Price: {book?.price}</p>
          
        </div>
      </div>
    );
}
