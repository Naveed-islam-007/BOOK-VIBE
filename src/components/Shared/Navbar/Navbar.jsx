import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
   const Links=(<>
    
     <li className='px-5'><NavLink to={'/'} className={({isActive})=>isActive?"text-green-500 border border-green-500 font-bold":""}>HOME</NavLink></li>
      <li className='px-5'><NavLink className={({isActive})=>isActive?"text-green-500 border border-green-500 font-bold":""} to={"/books"}>Listed Books</NavLink></li>
       <li className='px-5'><NavLink className={({isActive})=>isActive?"text-green-500 border border-green-500 font-bold":""} to={"/pages-to-read"}>Pages to read</NavLink></li>
   
   </>
   )
    return (
       <div>
        <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabIndex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     <ul tabIndex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
     </ul>
    </div>
    <h2 className="font-bold text-xl">Book Vibe</h2>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div class="navbar-end space-x-3">
    <a class="btn btn-success">Sign in </a>
    <a class="btn btn-error">Sign up</a>
  </div>
</div>
       </div>
    );
};

export default Navbar;