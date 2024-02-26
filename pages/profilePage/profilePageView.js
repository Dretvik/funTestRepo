function profilePageView() {
    clearInterval(clickerGameInterval);
    model.app.currentPage = 'profilePage';
    updateNavButtonsVisibility('profilePage');

    const user = model.app.loggedInUser;
    document.getElementById('mainContentDiv').innerHTML = /*HTML*/`
    <div id="profilePageContentView">
        <h2>Hello there <span class="profilePageDisplayNameSpans">${user.displayName}</span>! Welcome to your profile page:</h2>
        <div id="profileInfoContentDiv" class="profilePageGridLayout">
            <div>
                <img class="profileImageProfilePage" src="${user.profileImage}">
            </div>
            <div>
                <p>A short text about you:</p>
                <p class="aboutYouParagraph"> ${user.description}</p>
            </div>
        </div>
        <h2 class="h2ProfilePageView">Want to edit your profile?</h2>
        <button class="profilePageEditButton" onclick="editProfilePageView()">Click Here to edit</button>
    </div>
    `;
}

function editProfilePageView() {
    const user = model.app.loggedInUser;
    document.getElementById('mainContentDiv').innerHTML = /*HTML*/`
    <div id="profilePageContentView">
    <h2>You are in your profile's 
        <span class="profilePageDisplayNameSpans">
        "EDIT MODE"
        </span>
        click on the 
        <span class="profilePageDisplayNameSpans">
        "save info" button
        </span>
        when you are done.
    </h2>
        <div id="profileInfoContentDiv" class="profilePageGridLayout">
            <div>
                <img class="profileImageProfilePage" src="${user.profileImage}">
                <br>
                <input id="imageUrlInput" type="text" placeholder="enter image url here">
            </div>
            <div>
                <p>A short text about you:</p>
                <textarea id="bioTextarea" class="aboutYouParagraph" rows="12" cols="50"></textarea>
            </div>
        </div>
        <h2 class="h2ProfilePageView">Ready to save information?</h2>
        <button class="profilePageEditButton" onclick="saveProfileInfo()">Save info</button>
    </div>
    `;
}