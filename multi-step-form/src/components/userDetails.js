import React from 'react';
import {Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import Header from './header.js';
import UserDetailForm from './userDetailForm.js';

const UserDetails = ({nextStep, values, handleChange, step}) => {
  return (
    <div>
    <Header name='Enter User Details'/>
    <UserDetailForm nextStep={nextStep} handleChange={handleChange}  values={values} step={step}/>
    </div>
  )
}

export default UserDetails;