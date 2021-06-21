import React from 'react'
import   './styles/header.scss'



const Header = (props) => {
    return (
       <header >
          <div id ='header' className='header-wrapper'>
            <h1>World Countries Data</h1>
            <h2>Currently, we have {props.count} countries </h2>

          </div>
        </header> 
    )
   
}

export default Header