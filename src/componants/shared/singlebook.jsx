import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const SingleBook = (props) => {
 const {book}=props;
 
    return (
    <Link to={ROUTES.SINGLE_BOOKS.DYNAMIC(book.bookId)}>
    <div className="card card-compact bg-base-100  shadow-xl border-solid  border-2 border-x-gray-300 hover:border-x-red-500">
    <figure className="px-10 pt-10">
    <img
      src={book.image}
      alt="Shoes"
      className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center -space-y-2">
    <h2 className="text-3xl text-red-950 ">{book.bookName}</h2>
    <span>By {book.author}</span>
    <p> Category : {book.category}</p>
    <div className="card-actions mt-3">
      <button className="btn  py-0 bg-slate-500">Book Details</button>
    </div>
  </div>
</div>
 </Link>
    );
};

export default SingleBook;