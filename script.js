addEventListener("submit", checkPassword);

function checkPassword(event) {
    event.preventDefault();
    let password1 = document.querySelector('#pass1').value; 
    let password2 = document.querySelector('#pass2').value; 
    let message = document.querySelector('.message'); 
    
    if (password1 == '') {
        message.textContent = "* Please, enter password!";
        document.querySelector('#pass1').classList.add("error");
    } else if (password2 == '') {
        message.textContent = "* Please, enter confirmation!";        
        document.querySelector('#pass2').classList.add("error");
    } else if (password1 != password2) { 
        message.textContent = "* Passwords do not match!";        
        document.querySelector('#pass1').classList.add("error");       
        document.querySelector('#pass2').classList.add("error");
    } else {
        document.querySelector('#pass1').classList.remove("error");       
        document.querySelector('#pass2').classList.remove("error");
        message.textContent = "";
    }
} 