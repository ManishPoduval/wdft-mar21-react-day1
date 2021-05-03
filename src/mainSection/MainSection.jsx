
import React from 'react'

class MainSection extends React.Component {
    render() {
        //destructuring the props
        let {name, className} =  this.props 

        let myClass = className ? `message ${className}` : 'message'

        return (
            <article className={myClass}>
                <div className="message-header">
                    <p>Hello {name} </p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>
            
        )
    }
}


export default MainSection