function registerUser() {
    const displayName = document.getElementById('displayNameRegistrationInput').value;
    const usernameInput = document.getElementById('usernameRegistrationInput');
    const username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    const email = document.getElementById('emailRegistrationInput').value.toLowerCase();
    const password1 = document.getElementById('passwordOneRegistrationInput').value;
    const password2 = document.getElementById('passwordTwoRegistrationInput').value;

    if(password1 === password2 && email.includes('@')){
        const newUser = {
            id: model.data.users.length +1,
            displayName: displayName,
            username: username,
            email: email,
            password: password1,
            profileImage: './img/profileImg/emptyUser.jpg',
            isAdmin: false,
            description: '',
            toDoAppTasks: [],
            clickerGame: { 
                interval: 0,
                points: 0,
                upgradeClicker: 1,
                clickerLevel: 1,
                idleClicker1: 0,
                idleClicker2: 0,
                idleClicker3: 0,
            },
        };
        model.data.users.push(newUser);
        loginPageView();
    } else {
        alert('Passwords do not match. Please enter the same password in both fields.');
        return;
    }
}