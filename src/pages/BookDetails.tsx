
import { useParams } from 'react-router-dom';
import {
  
  useSingleBookQuery,
  
} from '../redux/books/bookApi';

import { Button } from '../components/ui/button';



export default function BookDetails() {


  const { id } = useParams();

  const { data: book, isLoading, error } = useSingleBookQuery(id);

  console.log(isLoading)
  console.log(error)
  

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
        
       
      </div>
    </>
  );
}
