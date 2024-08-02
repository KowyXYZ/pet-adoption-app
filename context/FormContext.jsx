// app/context/FormContext.js
"use client";


import React, { createContext, useState } from 'react';


export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    address1: '',
    address2: '',
    postalCode: '',
    city: '',
    garden: false,
    homeSituation: '',
    householdSetting: '',
    activityLevel: '',
    numberOfAdults: '',
    numberOfChildren: '',
    ageOfChild: '',
    flatmates: false,
    animalsAtHome: false,
    ifAnimalYesDesc: '',
    ifAnimalNeutered: false,
    ifAnimalVaccinated: false,
    describeExp: ''
  });

  const handleChange = (e, name) => {
    setFormState((prev) => ({...prev, [name]: e.target.value}));
    localStorage.setItem('SubmitForm', JSON.stringify(formState))
  };

  console.log(formState)

  return (
    <FormContext.Provider value={{ formState, setFormState, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
