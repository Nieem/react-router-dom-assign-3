import React from 'react';
import { useState,useEffect } from 'react';
 import axios from 'axios';
 import jsondata from '../assets/book-data.json' 

const  Bookspage = () => {
    const [bookList, setBookList] = useState([]); 
    const getAllBooks= async ()=>{
       // const data = await axios.get("../assets/book-data.json"); 
       const loadData=[...jsondata];
       console.log(loadData);
        setBookList(loadData); 
    }
    useEffect(() => { 
        getAllBooks();  
      }, []); 


    return (
        <div className='container bg-slate-500 my-28 mx-auto'>
           { bookList.map((item,i) => ( 
                        // Presently we only fetch 
                        // title from the API 
                        <h4 key={i}>{item.author}</h4> 
                    )) 

                }
        </div>
    );
};
export default Bookspage;