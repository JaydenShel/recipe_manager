import '../App.css'
import React, { useContext, useState } from 'react';
import { Context } from '../components/LoginState';
import Title from '../components/Title';
import About from '../components/About';
import LoginButtons from '../components/LoginButtons';
import RecipeCarouselS from '../components/RecipeCarouselS';
import lemonChicken from '../images/lemon_chicken.jpg';
import shrimpScampi from '../images/shrimp_scampi.jpg';
import stirFry from '../images/stir_fry.jpg';
import margheritaPizza from '../images/pizza.jpg'

function Home(){
    const [isLoggedIn, setIsLoggedIn] = useContext(Context);
    const recipeImages = [lemonChicken, shrimpScampi, stirFry, margheritaPizza];
    return(
        <div> 
            {isLoggedIn ? null : <LoginButtons />}
            
            <Title/>
     
            <About/>

            <h2>Discover Our Sample Recipes</h2>

            <RecipeCarouselS images={recipeImages} />

        </div>
    );
}

export default Home;
