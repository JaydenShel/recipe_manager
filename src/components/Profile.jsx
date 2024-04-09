function Profile() {
    return (
        <div>
            <div>
                <img src="./images/default_profile.jpg" alt="" className="profile-image"></img>
            </div>
            <div>
              <h1 className="profile-text">{sessionStorage.getItem('username')}</h1>  
            </div>
        </div>
    )
}

export default Profile;