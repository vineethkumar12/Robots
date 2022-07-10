import React from 'react'

 const R2 = ({name,email,id}) => {
  return (
    <div className='tc bg-light-green dib br1 pa ma2 grow  shadow-5'>
         <img alt='noimage'  src={`https://robohash.org/${id}?100X100`}/>

        <div>
                <h2> {name}</h2>
                 <p>{email}</p>

        </div>

    </div>
  )
}
export default R2