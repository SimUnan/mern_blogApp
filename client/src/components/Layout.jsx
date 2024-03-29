import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='w-11/12 max-w-5xl mx-auto'>
            {children}
        </div>
    )
}

export default Layout
