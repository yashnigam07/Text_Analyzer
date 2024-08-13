import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`p-4 shadow-md ${props.mode === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-2xl font-semibold" href="/">{props.title}</a>
        <button className="block lg:hidden focus:outline-none" aria-label="Toggle navigation">
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current mt-1"></span>
          <span className="block w-6 h-0.5 bg-current mt-1"></span>
        </button>
        <div className="hidden lg:flex space-x-4">
          <a className="hover:underline" href="/">Home</a>
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/">Services</a>
          <a className="hover:underline" href="/">Contact</a>
        </div>
        <div className="flex items-center">
          <label className="mr-2">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
          <input 
            className="form-switch cursor-pointer"
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault" 
            onChange={props.toggleMode} 
          />
        </div>
      </div>
    </nav>
  );
}
