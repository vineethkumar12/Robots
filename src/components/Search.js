import React from 'react'

 const Search = ({sea,handler}) => {
  return (
    <div className='pa2'>   
    <input className='pa2 ba b--green  bg-lightest-blue' type="search" placeholder='search' value={sea} onChange={handler}/>



    </div>
  )
}
export default Search;