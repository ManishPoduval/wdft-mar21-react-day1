// Import react even in functional components
import React from 'react'
import './Header.css'

// In functional components props are always as an object in the function parameter
const Header = (props) => {

    return <h1 className="manish">{props.myHeader}</h1>
}

export default Header