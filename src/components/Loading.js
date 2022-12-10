import ReactLoading from 'react-loading';
import React from 'react'

const Loading = ({type}) => {
  return (
    <div className="load">
        <ReactLoading type={type} color='black' className='loading' height={50} width={50} />
    </div>
  )
}

export default Loading
