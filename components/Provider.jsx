"use client"
import React from 'react'
import {SessionProvider} from 'next-auth/react'
import FormProvider from '@/context/FormContext'


const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      <FormProvider>
       {children}
      </FormProvider>
    </SessionProvider>
  )
}

export default Provider