import React from 'react';

export default function AddNewBook() {

  const handleAdd = (event:any) => {
    event.preventDefault();
    const form = event.target;
    const items = form.items.value;
    const price = form.price.value;
    const textarea = form.textarea.value;
    const genre = form.genre.value;
    const url = form.url.value;
    const used = form.used.value;
    const PurchaseYear = form.PurchaseYear.value;
    
    console.log(items,price,textarea,genre,url,used,PurchaseYear)
  }
  return (
    <div className='mx-auto w-96'>
      <h2 className="text-3xl font-bold mb-5">Now add products</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="items"
          placeholder="Your book title"
          className="input w-full input-bordered"
        />
        <br />
        <br />
        <input
          type="text"
          name="url"
          placeholder="Your book image url"
          className="input w-full input-bordered"
        />
        <br />
        <br />
        <textarea
          
          name="textarea"
          placeholder="Your book description"
          className="input w-full input-bordered"
        />
        <br />
        <br />
        <input
          type="text"
          name="price"
          placeholder="Your book author name"
          className="input w-full input-bordered"
        />
        <br />
        <br />
       

        <input
          type="text"
          name="PurchaseYear"
          placeholder="Your book reviews"
          className="input w-full input-bordered"
        />
        <br />
        <br />
        <input
          name="genre"
          type="text"
          placeholder="Your book Genre "
          className="input w-full input-bordered"
        />
        <br />
        <br />
        <input
          name="used"
          type="text"
          placeholder="publication year"
          className="input w-full input-bordered"
        />
        <br />
        <br />
       
        <input  className="btn btn-accent w-full max-w-xs hover:cursor-pointer" type="submit" />
      </form>
    </div>
  );
}
