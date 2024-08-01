// app/context/FormContext.js
"use client"
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
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

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
