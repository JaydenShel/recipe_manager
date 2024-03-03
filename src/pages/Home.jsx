import '../App.css'
import React from 'react';
import Title from '../components/Title';
import About from '../components/About';
import LoginButtons from '../components/LoginButtons';
import RecipeCarouselS from '../components/RecipeCarouselS';
import recipeImage1 from '../images/lemon_chicken.jpg';
import recipeImage2 from '../images/shrimp_scampi.jpg';


function Home(){
    const IsUserLoggedIn = false;
    const recipeImages = [recipeImage1, recipeImage2];

    return(
        <div> 
            {IsUserLoggedIn ? null : <LoginButtons />}
            
            <Title/>
     
            <About/>

            <RecipeCarouselS images={recipeImages} />

        </div>
    );
}

export default Home;