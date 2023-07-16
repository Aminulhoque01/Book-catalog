import React, { useState } from 'react';
import { usePostBookMutation } from '../redux/books/bookApi';
import { toast } from '../components/ui/use-toast';



export default function AddNewBook() {
  const [inputValue, setInputValue] = useState<string>('');
  // const {data} = useGetCommentQuery({refetchOnMountOrArgChange:true,pollingInterval:30000});
  const [postBook, {isLoading,isError,isSuccess}] = usePostBookMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleAdd = (event:any) => {
    event.preventDefault();
    const form = event.target;
    const title = form.items.value;
    const author = form.author.value;
    const details = form.details.value;
    const Genre = form.genre.value;
    const image = form.url.value;
    const publication = form.publication.value;
    const reviews = form.reviews.value;
    
    

    const options ={
      
      data:{ title,author,details,Genre,image,reviews,publication},
    };
    postBook(options);

    setInputValue('');
    toast({description:'book add successfully'})
  }

  return (
    <div className='mx-auto w-96'>
      <h2 className="text-3xl font-bold mb-5">Now add products</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="items"
          placeholder="Your book title"
          className="input w-full border input-bordered"
        />
        <br />
        <br />
        <input
          type="text"
          name="url"
          placeholder="Your book image url"
          className="input w-full border  input-bordered"
        />
        <br />
        <br />
        <textarea
          
          name="details"
          placeholder="Your book description"
          className="input w-full input-bordered border"
        />
        <br />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Your book author name"
          className="input w-full input-bordered border"
        />
        <br />
        <br />
       

        <input
          type="text"
          name="reviews"
          placeholder="Your book reviews"
          className="input w-full input-bordered border"
        />
        <br />
        <br />
        <input
          name="genre"
          type="text"
          placeholder="Your book Genre "
          className="input w-full input-bordered border"
        />
        <br />
        <br />
        <input
          name="publication"
          type="text"
          placeholder="publication year"
          className="input w-full input-bordered border"
        />
        <br />
        <br />
       
        <input  className="btn btn-accent w-full border max-w-xs hover:cursor-pointer" type="submit" />
      </form>
    </div>
  );
}
