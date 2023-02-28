import React from 'react'

export default function SearchBox(props) {
  return (
    <div>
        <input 
            className="search"
            type="Search" 
            aria-label="search"
            placeholder="Search Products" 
            onChange={props.handleChange} 
        />
        
    </div>
  );
};
