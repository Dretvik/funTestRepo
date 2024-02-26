function registrationPageView(){
    model.app.currentPage = 'registrationPage';
    app.innerHTML = /*HTML*/`
    <div id="registrationPageContainer" class="beforeLoginContainers">
        <h1 class="standardH1">Registration Page</h1>
        <div id="registrationInputDiv">

            <span class="registrationPageSpans">Display Name:</span>
            <input id="displayNameRegistrationInput" type="text">

            <span class="registrationPageSpans">Username:</span>
            <input id="usernameRegistrationInput" type="text">

            <span class="registrationPageSpans">e-mail:</span>
            <input id="emailRegistrationInput" type="email">

            <span class="registrationPageSpans">Password:</span>
            <input id="passwordOneRegistrationInput" type="password">

            <span class="registrationPageSpans">Re enter password:</span>
            <input id="passwordTwoRegistrationInput" type="password">
        </div>
        <div id="registrationPageButtonsDiv">
            <button class="standardButtonsClass" onclick="registerUser()">Submit</button>
            <button class="standardButtonsClass" onclick="loginPageView()">Go back</button>
        </div>
    </div>
    `;
}