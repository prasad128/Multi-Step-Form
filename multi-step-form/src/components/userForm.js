import React, { useState } from 'react';

import '../style.css';

import UserDetails from './userDetails.js';
import PersonalDetails from './personalDetails.js';
import Confirm from './confirm.js';
import Success from './success.js';
import Header from './header.js'





const UserForm = () => {
    const [state, setState] = useState({
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  gender: 'male',
  }
)


const nextStep = () => (
  setState(state => ({
    ...state,
    step: state.step + 1
  }
  ))
)

const prevStep = () => (
  setState(state => ({
    ...state,
    step: state.step - 1
  }
  ))
)



const handleChange = (e) => (
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
)

const {firstName, lastName, email, occupation, city, gender} = state;

const values = {firstName, lastName, email, occupation, city, gender};

switch(state.step){
    default: 
      return null;
    case 1:
      return <UserDetails nextStep={nextStep} handleChange={handleChange} values={values} step={state.step}/>;
    case 2:
      return <PersonalDetails nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={values}step={state.step}/>;
    case 3:
      return <Confirm nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={values}step={state.step}/>;
    case 4:
      return <Success/>;
}

    
  
}

export default UserForm;
