function forgotPasswordPageView() {
    model.app.currentPage = 'forgotPasswordPage';
    app.innerHTML = /*HTML*/`
    <div id="forgotPasswordPageContainer" class="beforeLoginContainers">
        <h1 class="standardH1">Forgotten your password?</h1>
        <div id="forgotPasswordInputDiv">
            <span>Please enter email adress:</span>
            <input>
        </div>
        <div id="forgotPasswordButtonsDiv">
            <button class="standardButtonsClass" onclick="forgottenPassword()">Send Password</button>
            <button class="standardButtonsClass" onclick="loginPageView()">Go back</button>
        </div>
    </div>
    `;
}