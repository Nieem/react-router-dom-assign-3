import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import   jsondata from "../assets/book-data.json";

const BookDetailspage = () => {
    const [bookdetails,setbookdetail]=useState([]);
    let bookID= useParams();
    console.log(bookID);
    const getBookById=()=>{
        const loadData=[...jsondata];
        const filterdata=loadData.filter(b=>b.bookId==bookID.bookId);
        setbookdetail(filterdata);
        //console.log(loadData);
        console.log(bookdetails);
    }

useEffect(()=>{
getBookById();
},[])

    return (
        <div className='my-20'>
           {console.log(bookdetails)}
           {
            bookdetails?.map((book)=> (
             
                 <div className="card card-compact bg-base-100  shadow-xl border-solid  border-2 border-x-gray-300 hover:border-x-red-500">
                    <figure className="px-10 pt-10">
                    <img
                      src={book.image}
                      alt="Shoes"
                      className="rounded-xl h-40" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{book.bookName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                
            
))}
        </div>
    );
};

export default BookDetailspage;