import React from 'react'
import './Footer.css'

function Footer(props) {

    // Boolean Props will look like this

    /*

    props = {
        name: false,
        isSuccess: true
    }

    */

    console.log(props.children)


    return (
        <div className="bottomSection">
            Some footer
            {props.children}
        </div>
    )
}

export default Footer