import Navbar from '@/components/global/Navbar'
import React from 'react'
import '@/styles/globals.css'
import BelowNav from '@/components/global/BelowNav'

const layout = ( {children} ) => {
  return (
    <html>
        <body>
            <div>
                <Navbar/>
                <BelowNav/>
                {children}
            </div>
        </body>
    </html>
  )
}

export default layout