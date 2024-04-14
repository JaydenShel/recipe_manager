import { Link } from 'react-router-dom';

function Profile() {
    const handleLogOut = () => {
        sessionStorage.setItem('token', '');
        setTimeout( () => {
            window.location.href = "/home";
        }, 10);
    }
    return (
        <div>
            <Link to={'/home'}>
                <button onClick={handleLogOut}>
                    Log Out
                </button>
            </Link>
            <div>
              <h1 className="profile-text">{sessionStorage.getItem('username')}</h1>  
            </div>

        </div>
    )
}

export default Profile;