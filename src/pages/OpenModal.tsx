import React, { useState } from 'react';
import { useUpdateBookMutation } from '../redux/books/bookApi';
import { toast } from '../components/ui/use-toast';

export default function OpenModal() {
  const [inputValue, setInputValue] = useState<string>('');

  const [updateBook, { isLoading, isError, isSuccess }] =
    useUpdateBookMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleEditBook = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const title = form.items.value;
    const author = form.author.value;
    const details = form.details.value;
    const Genre = form.genre.value;
    const image = form.url.value;
    const publication = form.publication.value;
    const reviews = form.reviews.value;

    const options = {
      data: { title, author, details, Genre, image, reviews, publication },
    };
    updateBook(options);

    setInputValue('');
    toast({ description: 'book updated successfully' });
  };

  return (
    <div>
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleEditBook} method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Book Edit</h3>
          <p className="py-4">
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

            <input
              className="btn btn-accent w-full border max-w-xs hover:cursor-pointer"
              type="submit"
            />
          </p>
        </form>
        <div className="modal-action">
          <button className="btn">Close</button>
        </div>
      </dialog>
    </div>
  );
}
