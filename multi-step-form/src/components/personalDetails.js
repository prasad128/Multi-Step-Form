import React from 'react';
import {Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import Header from './header.js';
import PersonalDetailForm from './personalDetailForm';

const PersonalDetails = ({nextStep, prevStep, values, handleChange, step}) => {
  return (
    <div>
      <Header name='Enter Personal Details'/>
       <PersonalDetailForm nextStep={nextStep} prevStep={prevStep} handleChange={handleChange}  values={values} step={step} />
    </div>
  )
}

export default PersonalDetails;