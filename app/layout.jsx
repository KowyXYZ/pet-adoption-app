import Navbar from '@/components/global/Navbar'
import React from 'react'
import '@/styles/globals.css'

const layout = ( {children} ) => {
  return (
    <html>
        <body>
            <div>
                <Navbar/>
                {children}
            </div>
        </body>
    </html>
  )
}

export default layout