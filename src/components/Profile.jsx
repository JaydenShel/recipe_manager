import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <Link to={'/profile'}>
                <img src="./images/default_profile.jpg" alt="" className="profile-image"></img>
            </Link>
            <div>
              <h1 className="profile-text">{sessionStorage.getItem('username')}</h1>  
            </div>

        </div>
    )
}

export default Profile;