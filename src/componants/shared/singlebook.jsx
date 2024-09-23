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
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
 </Link>
    );
};

export default SingleBook;