function saveProfileInfo() {
    const user = model.app.loggedInUser;

    const newImage = document.getElementById('imageUrlInput').value;
    const newDescription = document.getElementById('bioTextarea').value;

    user.description = newDescription !== '' ? newDescription : user.description;
    user.profileImage = newImage !== '' ? newImage : user.profileImage;
    
    document.getElementById('navBarProfileImage').src = user.profileImage;

    profilePageView();
}