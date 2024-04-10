import '../App.css'
import PizzaI from '../images/pizza.jpg';
import HomeButton from '../components/HomeButton';

const Pizza = () => {
    return (
<div className='text-background'>
    <HomeButton/>
            <div className='text'>
                <h2>Lemon Chicken Recipe</h2>
                <div className='sub-background'>
                    <h3 className='subtitle'>Ingredients:</h3>
                    <ul>
                        <li>4 boneless, skinless chicken breasts</li>
                        <li>2 lemons, juiced and zested</li>
                        <li>4 cloves garlic, minced</li>
                        <li>2 tablespoons olive oil</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1/2 teaspoon salt</li>
                        <li>1/4 teaspoon black pepper</li>
                        <li>Fresh parsley, chopped (for garnish)</li>
                    </ul>
                </div>
                <div className='sub-background'>
                    <h3 className='subtitle'>Instructions:</h3>
                    <ol>
                        <li>In a small bowl, combine lemon juice, lemon zest, minced garlic, olive oil, oregano, salt, and pepper.</li>
                        <li>Place chicken breasts in a shallow dish or resealable plastic bag. Pour the lemon marinade over the chicken, making sure it's evenly coated. Marinate in the refrigerator for at least 30 minutes, or up to 4 hours.</li>
                        <li>Preheat grill or grill pan to medium-high heat. Remove chicken from marinade and discard excess marinade.</li>
                        <li>Grill chicken for 6-7 minutes per side, or until cooked through and no longer pink in the center.</li>
                        <li>Remove chicken from grill and let it rest for a few minutes before serving.</li>
                        <li>Garnish with chopped fresh parsley before serving.</li>
                    </ol>
                </div>
                <h1>Enjoy your delicious lemon chicken!</h1>
            </div>
            <img src={PizzaI} alt="Shrimp Scampi" className='carousel-image'/>
        </div>
    )
}

export default Pizza;