

import Navbar from '@/components/global/Navbar'
import React from 'react'
import '@/styles/globals.css'
import BelowNav from '@/components/global/BelowNav'
import Footer from '@/components/global/Footer'
import Provider from '@/components/Provider'
import "@uploadthing/react/styles.css";





const layout = ( {children} ) => {
  return (
    <html>
        <body>
            <div>
              <Provider>
                <Navbar/>
                <BelowNav/> 
                {children}
                <Footer/>
              </Provider>
            </div>
        </body>
    </html>
  )
}

export default layout