//Name RegEx
const name = document.querySelector('#name');
const errorOutput = document.querySelector('.text-error');
name.addEventListener('input', function()
{
    let nameCheck = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(nameCheck.test(name.value))
    {
        errorOutput.textContent = "";
    }
    else if(name.value == "")
    {
        errorOutput.textContent = "";
    }
    else
    {
        errorOutput.textContent = "Wrong Name Format";
    }
});
//Password RegEx
const password = document.querySelector('#password');
const messagePassword = document.querySelector('.message-password');

password.addEventListener('input', function()
{
    let passCheck = RegExp('^[0-9A-Za-z!@#$%^&*]{8,}$')
    if(passCheck.test(password.value))
    {
        messagePassword.textContent = "";
    }
    else if(password.value == "")
    {
        messagePassword.textContent = "";
    }
    else
    {
        messagePassword.textContent = "Password should have min 8 Characters";
    }
});
//Email RegEx
const email = document.querySelector('#email');
const messageEmail = document.querySelector('.message-email');

email.oninput = function()
{
    let emailcheck = RegExp('^[0-9a-z]{1,}([.+-]?)[0-9a-z]{1,}(@)[a-z0-9]{1,}(.)(com|co|net)((.in|.com|.au)*)$');
    if(emailcheck.test(email.value))
    {
        messageEmail.textContent = "";
    }
    else if(email.value == "")
    {
        messageEmail.textContent = "";
    }
    else
    {
        messageEmail.textContent = "Invalid Email ID";
    }
};
//TelePhone Number Check
const tel = document.querySelector('#telephone');
const messageTel = document.querySelector('.message-tel');

tel.oninput = function()
{
    let telePhoneCheck = RegExp('^[0-9]{11}$');
    if(telePhoneCheck.test(tel.value))
    {
        messageTel.textContent = "";
    }
    else if(tel.value == "")
    {
        messageTel.textContent = "";
    }
    else
    {
        messageTel.textContent = "Invalid TelePhone Number";
    }
};
//Salary Range
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});