import { Link } from 'react-router-dom';

function ProfileButtons() {
    
    return(
        <>
            <Link to={'/recipes'}>  
                <button className="button">
                    <p>Recipes</p>
                </button>
            </Link>
        </>
        
    )
}

export default ProfileButtons;