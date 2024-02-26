// Flytte denne funksjonen til mainPageView.js etterhvert 
function logoutFunction() {
    model.app.loggedInUser = null;
    loginPageView();
}
/////////////////////////////////////////////////////////////
