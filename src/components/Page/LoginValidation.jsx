function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

if(values.email === "") {
    error.eail = "Name should not be empty"
}
else if(!email_pattern.test(values.email)) {
    error.email = "Email Didin't match"
} else {
    error.email = ""
}

if(values.password === "") {
    error.password = "Passowrd should not be empty"
}
else if(!password_pattern.test(values.password)){
    error.password = "Password Didn't match"
} else {
    error.password = ""
}
return error;

}

export default Validation;