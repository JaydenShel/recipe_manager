import { Link } from 'react-router-dom';

function LoginButtons(){
    return(
        <div>
            <Link to={'/Login'}>
                <button className="button">
                    <p>Log in</p>
                </button>
           </Link>
           <Link to={'/Account'}>
                <button className="button">
                    <p>Create Account</p>
                </button>
           </Link>
        </div>
    )

}

export default LoginButtons;