import { Link } from 'react-router-dom';

function SettingsButton(){
    return(
        <Link to={'/settings'}>
            <button className="button">
                <p>Settings</p>
            </button>
        </Link>  
    )

}

export default SettingsButton;