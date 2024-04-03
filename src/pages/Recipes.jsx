import React from "react";
import Title from "../components/Title";
import HomeButton from "../components/HomeButton";
import RecipeBox from "../components/RecipeBox";

function Recipes(){
    return(
        <>
            <HomeButton/>
            <Title/>
            <RecipeBox/>
        </>
    );
}

export default Recipes;