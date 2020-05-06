import React from 'react';
import {Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import Header from './header.js';
import PersonalDetailForm from './personalDetailForm';
import UserDetailForm from './userDetailForm';

const Confirm = ({nextStep, prevStep, values, handleChange, step}) => {
  return (
    <div>
      <Header name='Confirm' />
      <UserDetailForm  nextStep={nextStep} handleChange={handleChange} values={values} step={step}/>
      <PersonalDetailForm  nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={values} step={step}/> 
    </div>
  )
}

export default Confirm;