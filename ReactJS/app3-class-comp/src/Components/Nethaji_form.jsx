// src/RegistrationForm.js
import React, { useState } from 'react';
import Form_Component from './Form_Component';
import Nethaji_table from './Nethaji_table';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    course: '',
    branch: '',
    rollno: '',
    email: '',
    username: '',
    about: '',
    password: ''
  });
  const [submissions,setsubmissions]=useState([])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const getData=()=>{
    fetch("http://localhost:3000/users").then((response)=>{
        return response.json()
    }).then(data=>{
        console.log(data)
        setsubmissions(data)
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:3000/users",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
    }).then(()=>{
        getData()
    })
    // Handle form submission
  };

  return (
    <>
   
    <Form_Component handleSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
    <Nethaji_table submissions={submissions}/>
    </>
  );
};

export default RegistrationForm;
