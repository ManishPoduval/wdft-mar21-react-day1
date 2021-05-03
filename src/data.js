let myName = 'Manish'



function print(){
    console.log('Print works')
}


let newName = 'Franco'

// Exporting three variables from here

export { newName, 
    print,
    myName}

export default {
    newName, 
    print,
    myName
}