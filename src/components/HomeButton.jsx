import { Link } from 'react-router-dom';

function HomeButton(){
    return(
        <>
            <Link to={'/home'}>
                <button className="button">
                    <p>Home</p>
                </button>
           </Link>
        </>     
    )

}

export default HomeButton;