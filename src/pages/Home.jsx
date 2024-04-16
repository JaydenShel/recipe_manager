import '../App.css'
import React, { useContext, useState, useEffect } from 'react';
import Title from '../components/Title';
import About from '../components/About';
import LoginButtons from '../components/LoginButtons';
import SettingsButton from '../components/SettingsButton';
import Profile from '../components/Profile';
import ProfileButtons from '../components/ProfileButtons';
import RecipeCarouselS from '../components/RecipeCarouselS';
import lemonChicken from '../images/lemon_chicken.jpg';
import shrimpScampi from '../images/shrimp_scampi.jpg';
import stirFry from '../images/stir_fry.jpg';
import margheritaPizza from '../images/pizza.jpg'


function Home(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setIsLoggedIn(!!token); 
    }, []); 

    const recipeImages = [lemonChicken, shrimpScampi, stirFry, margheritaPizza];
    
    return(
        <div className='home-page'> 
            

            <div className='button-container'>
                {!isLoggedIn ? null : <Profile/>}
                <SettingsButton/>
                {!isLoggedIn ? null : <ProfileButtons/>}
               
                {isLoggedIn ? null : <LoginButtons />}

            </div>

            <Title/>

            <About/>

            <h2 className='sample-container'>Discover Our Sample Recipes</h2>

            <RecipeCarouselS images={recipeImages} />

        </div>
    );
}

export default Home;
