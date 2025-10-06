import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import Error from './Error';
import Home from './Home';
import About from './About';
import BookDetails from '../BOOKS/BookDetails';
import Raedlist from './Raedlist';

export const router=createBrowserRouter([
    {
        path:'/',
     Component: Root,
     errorElement:<Error></Error>,
     children:[
        {
            index:true,
            path: '/',
            loader:()=>fetch('/booksData.json'),
            Component: Home
        },
        {
            path:'/about',
            Component: About
        },
        {
            path: '/bookDetails/:id',
            loader:()=>fetch('/booksData.json'),
            Component: BookDetails
            
        },
        {
            path:'readList',
            loader:()=>fetch('/booksData.json'),
            Component: Raedlist
        }
       
        
     ]
    }

])