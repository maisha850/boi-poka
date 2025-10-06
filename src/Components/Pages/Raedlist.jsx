import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getData } from '../Utilty/Utility';
import Book from '../BOOKS/Book';
import { getWishData } from '../Utilty/Wishlist';

const Raedlist = () => {
    const data=useLoaderData()
    const [readList, setReadList]=useState([])
    const[sort, setSort]=useState("")
    const[wishList, setWishList]=useState([])
    useEffect(()=>{
        const storedBookData=getData();
        const convertedDataInNum=storedBookData.map(id=>parseInt(id));
        const myReadlist=data.filter(book=>convertedDataInNum.includes(book.bookId))
        setReadList(myReadlist)
    },[])
    const handleSort=(type)=>{
      setSort(type)
      if(type==="Pages"){
        const sortPages=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
        setReadList(sortPages)
        setWishList(sortPages)
      }
      if(type==="Ratings"){
        const sortRatings=[...readList].sort((a,b)=>b.rating- a.rating)
        setReadList(sortRatings)
        setWishList(sortRatings)
      }

    }

    useEffect(()=>{
        const storedBookData2=getWishData()
        const convertDatainNum=storedBookData2.map(id=>parseInt(id))
        const myWishList=data.filter(book=>convertDatainNum.includes(book.bookId))
        setWishList(myWishList)
    },[data])
    // console.log(wishList)
    return (
      
        
             <Tabs>
              <details className="dropdown">
  <summary className="btn m-1">Sort by : {sort? sort : ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
  </ul>
</details>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-3xl font-semibold p-5'> Books I read: {readList.length}</h2>
     <div className='grid grid-cols-1'>
         {
        readList.map(b=><Book key={b.bookId} book={b}></Book>)
      }
     </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-3xl font-semibold p-5'>The books I wished to read : {wishList.length}</h2>
      <div className='grid grid-cols-1'>
         {
        wishList.map(b=><Book key={b.bookId} book={b}></Book>)
      }
     </div>
    </TabPanel>
  </Tabs>
            
    
    );
};

export default Raedlist;