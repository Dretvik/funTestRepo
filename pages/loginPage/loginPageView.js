function loginPageView() {
    model.app.currentPage = 'loginPage';
    app.innerHTML = /*HTML*/`
    <div id="loginPageContainer" class="beforeLoginContainers">
        <h1 class="standardH1">Login to Ellie's awesome app!</h1>
        <div id="loginInputDiv">
            <span class="loginPageSpans">Username:</span>
            <input id="usernameLoginInput" type="text" autofocus=true>
            <span class="loginPageSpans">Password:</span>
            <input id="passwordLoginInput" type="password">
        </div>
        <div id="loginButtonsDiv">
            <button class="standardButtonsClass" onclick="userLogin()">Login</button>
            <button class="standardButtonsClass" onclick="registrationPageView()">Register</button>
            <button class="standardButtonsClass" onclick="forgotPasswordPageView()">Forgot Password?</button>
        </div>
    </div>
    `;
}