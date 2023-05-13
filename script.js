const form = document.getElementById("form")
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
const messageContainer = document.querySelector(".message-container")
const message = document.getElementById("message")

let isValid = false

let passwordsMatch = false

function validateForm() {
	//Using Constraint API
	isValid = form.checkValidity()
	console.log(isValid)
	// Style main message for an error
	if (!isValid) {
		message.textContent = "Please fill out all fields"
		message.style.color = "#ef476f"
		messageContainer.style.borderColor = "#ef476f"
        return 
	}
	// Check to see if passwords match
	if (password1El.value === password2El.value) {
		passwordsMatch = true
        password1El.style.borderColor = '#06d6a0'
        password2El.style.borderColor = '#06d6a0'
	} else {
        passwordsMatch = false
        message.textContent = 'Make sure passwords match'
        message.style.color = "#ef476f"
        messageContainer.style.borderColor = "#ef476f"
        password1El.style.borderColor = "#ef476f"
        password2El.style.borderColor = "#ef476f"
        return
    }
    // If form is valid and passwords match
    if(isValid && passwordsMatch) {
        message.textContent = 'Successfully registered!'
        message.style.color = "#06d6a0"
        messageContainer.style.borderColor = "#06d6a0"
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.email.value,
        password: form.password.value

    }
    // Do something with user data
    console.log(user)
}

function processFormData(e) {
	e.preventDefault()
	// Validate Form
	validateForm()
    // Submit Data if Valid
    if(isValid && passwordsMatch) {storeFormData()}
}

// Event listener
form.addEventListener("submit", processFormData)
