var loginOpen = document.querySelector('.login-open')
var login = document.querySelector('.login')

var signinOpen = document.querySelector('.signin-open')
var signin = document.querySelector('.signin')
var textSignin = document.querySelector('.text-signin')

var linner = document.querySelector('.linner')
var linner2 = document.querySelector('.linner2')

// Form Login
var username = document.querySelector('#username')
var password = document.querySelector('#passwork')
var email = document.querySelector('#email')
var form = document.querySelector('form')


// Form SignIn
var usernameSignin = document.querySelector('#username-signin')
var passwordSignin = document.querySelector('#passwork-signin')
var confirmPasswordSignin = document.querySelector('#confirm-passwork-signin')
var emailSignin = document.querySelector('#email-signin')
var formSignin = document.querySelector('.form-signin')

// Messager
var openMess = document.querySelector('.open-mess')
var closeMess = document.querySelector('.close-mess')
var modalMess = document.querySelector('.modal-mess')

function toggleLogin(e) {
    login.classList.toggle('hidden')
}
function toggleSignin(e) {
    signin.classList.toggle('hidden')
}

loginOpen.addEventListener('click', toggleLogin)
linner.addEventListener('click', toggleLogin)

signinOpen.addEventListener('click', toggleSignin)
linner2.addEventListener('click', toggleSignin)
textSignin.addEventListener('click', toggleLogin)
textSignin.addEventListener('click', toggleSignin)




function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input =>{
        input.value = input.value.trim()
        if(!input.value){
            showError(input, 'Không được để trống')
        }
        else{
            showSuccess(input)
        }
    })

    return isEmptyError
}

function checkEmailError (input){
    const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }
    else{
        showError(input, 'Email không hợp lệ')
    }

    return isEmailError
}

function checkLengthError(input, min, max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return true
    }
    if(input.value.length > max){
        showError(input, `Số ký tự không được vượt quá ${max} ký tự`)
        return false
    }
    else{
        showSuccess(input)
        return false
    }
}

function checkMatchPassword(passwordInput, confirmPasswordInput){
    if(passwordInput.value !== confirmPasswordInput.value){
        showError(confirmPasswordInput, 'Mật khẩu không trùng khớp')
        return true
    }
    return false
}

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let isEmptyError = checkEmptyError([username, password, email])
    let isEmailError = checkEmailError(email)
    let isUsernameError = checkLengthError(username, 3, 10)
    let isPasswordError = checkLengthError(password, 3, 10)
})

formSignin.addEventListener('submit', function(event) {
    event.preventDefault()
    let isEmptyError = checkEmptyError([usernameSignin, passwordSignin, emailSignin, confirmPasswordSignin])
    let isEmailError = checkEmailError(emailSignin)
    let isUsernameError = checkLengthError(usernameSignin, 3, 10)
    let isPasswordError = checkLengthError(passwordSignin, 3, 10)
    let ischeckMatchPasswordError = checkMatchPassword(passwordSignin, confirmPasswordSignin)
})

openMess.addEventListener('click',()=>{
    modalMess.classList.toggle('hidden')
})
closeMess.addEventListener('click',()=>{
    modalMess.classList.toggle('hidden')
})

