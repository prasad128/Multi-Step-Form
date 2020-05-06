import React from 'react';
import {Button, Form, FormGroup, Label, Input,} from 'reactstrap';

const PersonalDetailForm = ({nextStep, prevStep, values, handleChange, step}) => {

  return (
<Form className='my-4 w-50 mx-auto'>
      
      <FormGroup>
      <Label for="exampleText">Occupation</Label>
       <Input type="text" name="occupation" id="exampleText" placeholder="Enter your occupation" defaultValue={values.occupation} onChange={handleChange}  ></Input>
      </FormGroup>
      <FormGroup>
      <Label for="exampleText">City</Label>
       <Input type="text" name="city" id="exampleText" placeholder="Enter your city name" defaultValue={values.city} onChange={handleChange}  />
      </FormGroup>
       <FormGroup>
        <Label for="exampleSelect">Gender</Label>
        <Input type="select" onChange={handleChange} name='gender' defaultValue={values.gender} id="exampleSelect">
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>other</option>
          
        </Input>
      </FormGroup>
      <Button color='secondary' outline className='float-left' onClick={prevStep}>Back</Button>
      <Button color='info float-right' onClick={nextStep}>{step === 2 ? 'Continue': 'Confirm'}</Button>
    
    </Form>
  )
}

export default PersonalDetailForm;