
function mainPageView() {
    model.app.currentPage = 'mainPage';
    clearInterval(clickerGameInterval);
    document.getElementById('mainContentDiv').innerHTML = /*HTML*/`
    <div id="mainPageContentView">
        <h2>This is the main content view</h2>
        <div>
            <h3 class="mainContentH3s">Apps:</h3>
            <div id="appsButtonsDiv">
                <button class="appLinkButtons" onclick="toDoAppPageView()">To Do App</button>
                <button disabled class="appLinkButtons">Only here for visualisation</button>
                <button disabled class="appLinkButtons">Only here for visualisation</button>
                <button disabled class="appLinkButtons">Only here for visualisation</button>
            </div>
            <h3 class="mainContentH3s">Games:</h3>
            <div id="gamesButtonsDiv">
                <button class="appLinkButtons" onclick="clickerGameView()">Clicker Game</button>
                <button disabled class="appLinkButtons">Only here for visualisation</button>
                <button disabled class="appLinkButtons">Only here for visualisation</button>
                <button disabled class="appLinkButtons">Only here for visualisation</button>
        </div>
        </div>
    </div>
    `;
    updateNavButtonsVisibility('mainPage');
}

function updateLoggedInLayout() {
    const user = model.app.loggedInUser;
    app.innerHTML = /*HTML*/`
    <section id="page">
        <header>
            <h1 class="standardH1">Ellie's aweseome world!</h1>
            <h1>You are currently logged in as "
            <span class="profilePageDisplayNameSpans">${user.displayName}</span>".</h1>
            <button 
                id="logoutButton" 
                class="standardButtonsClass" 
                onclick="logoutFunction()">
                Logout
            </button>
        </header>

        <nav>
            <div id="navButtonsDiv">
                <img id="navBarProfileImage" src="${user.profileImage}">
                <h2>Navigation:</h2>
                <button 
                    class="navButtons" 
                    onclick="mainPageView()" 
                    data-page="mainPage">
                    Main Page
                </button>
                <button 
                    class="navButtons" 
                    onclick="profilePageView()" 
                    data-page="profilePage">
                    Profile Page
                </button>
            </div>
        </nav>

        <main id="mainContentDiv">

        </main>

        <footer>Ellie's App &copy; 2024</footer>
    </section>
    `;
}

function updateNavButtonsVisibility(currentPage) {
    const navButtons = document.getElementsByClassName('navButtons');
    for (let button of navButtons) {
        if (button.getAttribute('data-page') === currentPage) {
            button.hidden = true;
        } else {
            button.hidden = false;
        }
    }
}