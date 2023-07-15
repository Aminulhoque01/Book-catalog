import React from 'react'
import { useGetBooksQuery } from '../redux/books/bookApi';
import { useToast } from '../components/ui/use-toast';
import { useAppDispatch } from '../redux/hook';
import { toggleState } from '../redux/books/bookSlice';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Slider } from '@radix-ui/react-slider';
import { IBook } from '../types/globalTypes';
import BookCard from '../components/BookCard';

export default function AllBooks() {
  const {data, isLoading} = useGetBooksQuery(undefined);

  const { toast } = useToast();

 
  const dispatch = useAppDispatch();
  

  const handleSlider = (value: number[]) => {
    // dispatch(setPriceRange(value[0]));
  };

  let productsData

  if (status) {
    productsData = data?.data?.filter(
      
    );
  } 
   else {
    productsData = data?.data;
  }

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">search</h1>
          {/* <div onClick={()=>dispatch(toggleState())} className="flex items-center space-x-2 mt-3">
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div> */}
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            
          </div>
          {/* <div>From 0$ To {priceRange}$</div> */}
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData?.map((book:IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
