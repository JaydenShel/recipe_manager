import React from "react";
import Title from "../components/Title";
import HomeButton from "../components/HomeButton";
import RecipeBox from "../components/RecipeBox";

function Recipes(){
    return(
        <div className="home-page">
            <HomeButton/>
            <Title/>
            <RecipeBox/>
        </div>
    );
}

export default Recipes;