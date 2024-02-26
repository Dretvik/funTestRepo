function userLogin(username, password){
    const usernameInput = document.getElementById('usernameLoginInput');
    username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    password = document.getElementById('passwordLoginInput').value;
    for (let user of model.data.users){
        if (username === user.username && password === user.password){
            model.app.loggedInUser = user;
            updateLoggedInLayout();
            mainPageView();
            return true;
        }
    }
    alert('username or password is wrong, try again');
    return false;
}

function addEventlistenersLoginPage(){
    const usernameInput = document.getElementById('usernameLoginInput');
    const passwordInput = document.getElementById('passwordLoginInput');
    usernameInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter'){
            passwordInput.focus();
        }
    });
    passwordInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter'){
            userLogin();
        }
    });
}