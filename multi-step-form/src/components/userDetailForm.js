import React from 'react';
import {Button, Form, FormGroup, Label, Input,} from 'reactstrap';

const UserDetailForm = ({nextStep, values, handleChange, step}) => {
  


  return (
<Form className='my-4 w-50 mx-auto'>
      
      <FormGroup>
      <Label for="exampleText">First Name</Label>
       <Input type="text" name="firstName" id="exampleText" placeholder="Enter your first name" defaultValue={values.firstName} onChange={handleChange}></Input>
      </FormGroup>
      <FormGroup>
      <Label for="exampleText">Last Name</Label>
       <Input type="text" name="lastName" id="exampleText" placeholder="Enter your last name" defaultValue={values.lastName} onChange={handleChange}  />
      </FormGroup>
      <FormGroup>
       <Label for="exampleEmail">Email</Label>
       <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email id" defaultValue={values.email} onChange={handleChange} />
      </FormGroup>
      {step === 3 ? null: <Button color='info float-right' onClick={nextStep}>Continue</Button>}
    
    </Form>
    )
}

export default UserDetailForm;