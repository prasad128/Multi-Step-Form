import React from 'react';

import Header from './header.js';

const Success = () => {
  return (
    <div>
    <Header name='Success'/>
     <div className='text-center my-4'>
      
      <h1>Thank You For Your Submission!</h1>
      <p>You will get an email with further instructions</p>
    </div>
    </div>
  )
}

export default Success;