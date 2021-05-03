// console.log('Hey, webpack works Manish')


// // By default looks for the default export first
// import something from 'path'

// //By using {} we tell it to look for the named export
// import {newName, print, myName} from './data.js'

// import exportedData from './data'

// // this will be whatever is exported by default
// console.log(exportedData)

// print()

// console.log('----------')
// console.log(myName)


// console.log('----------')
// console.log(newName)


import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './footer/Footer'
import Header from './header/Header'
import MainSection from './mainSection/MainSection'
import 'bulma/css/bulma.css'


function App() {

    let originalHeader = 'Ironhack is very cool!'

    return (
        <div>
            <Header  myHeader={originalHeader}  />

            {/* Invoking components different times */}
            <MainSection  />
            
            {/* invoking with some props */}
            <MainSection  
                name={'Luis'}  
                className={'is-success'} 
             />
            <MainSection  
                name={'Jorge'} 
                className={'is-warning'}
            />




            {/* Invoking with boolean props */}
            <Footer name={false} isSuccess />


            {/* Invoking with children props */}
            <Footer>  
                <h1>Manish</h1>
            </Footer>




            <Header  myHeader={'Rutul is learning React'}  />
        </div>
    )
}





ReactDOM.render(<App />, document.querySelector('#root'))





