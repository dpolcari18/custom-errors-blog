// custom error - creates a new instance (object) of nameError
class nameError {
    constructor(name, message) {
        this.name = name
        this.message = message
    }
}

// test if first character is capitalized
function firstChar(name) {
    // if true imagine sending to backend before clearing input
    if (name.charAt(0).toUpperCase() === name.charAt(0)) {
        // insert fetch to backend here
        document.getElementById('form-input').name = ''
    } else {
        // throw error if first letter is not capitalized
        throw new nameError(name, 'First letter must be capitalized')
    }
}

window.addEventListener('DOMContentLoaded', () => {

    let error = document.getElementById('error')

    // add submit event listener to form 
    document.getElementById('testing').addEventListener('submit', (e) => {
        e.preventDefault()
        
        // reset error message on DOM before testing next input
        error.innerText=''

        let name = document.getElementById('form-input').value
        
        try {
            // test input from form
            firstChar(name)
        } catch(e) {
            // add custom error message to DOM to communicate to user what your program expects
            document.getElementById('error').innerText=`${e.message} in ${e.name}`
        }
    })
});












