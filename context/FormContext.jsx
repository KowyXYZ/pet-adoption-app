// app/context/FormContext.js
"use client";


import React, { createContext, useState } from 'react';
import { v4 as uuid } from "uuid";


export const FormContext = createContext();



// const unique_id = uuid();
// const newId = unique_id.slice(0, 12);

const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState(localStorage.getItem('SubmitForm') ? JSON.parse(localStorage.getItem('SubmitForm')): {
    name: '',
    email: '',
    image: '',
    phone: '',
    address1: '',
    address2: '',
    postalCode: '',
    city: '',
    garden: '',
    homeSituation: '',
    householdSetting: '',
    activityLevel: '',
    numberOfAdults: '',
    numberOfChildren: '',
    ageOfChild: '',
    flatmates: '',
    animalsAtHome: '',
    ifAnimalYesDesc: '',
    ifAnimalNeutered: '',
    ifAnimalVaccinated: '',
    describeExp: '',
    id: ''
  });

  const handleChange = (e, name) => {
    setFormState((prev) => ({...prev, [name]: e.target.value}));
    localStorage.setItem('SubmitForm', JSON.stringify(formState))
  };

  const directChange = (value, name) => {
    setFormState((prev) => ({...prev, [name]: value}))
    localStorage.setItem('SubmitForm', JSON.stringify(formState))
  }

  // console.log(formState)

  return (
    <FormContext.Provider value={{ formState, setFormState, handleChange, directChange }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
