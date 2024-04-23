import '../App.css'
import PizzaI from '../images/pizza.jpg';
import HomeButton from '../components/HomeButton';

const Pizza = () => {
    return (
        <div className='text-background'>
            <HomeButton />
            <div className='text'>
                <h2>Homemade Pizza Recipe</h2>
                <div className='sub-background'>
                    <h3 className='subtitle'>Ingredients:</h3>
                    <ul>
                        <li>1 package (0.25 ounce) active dry yeast</li>
                        <li>1 teaspoon white sugar</li>
                        <li>1 cup warm water (110 degrees F/45 degrees C)</li>
                        <li>2 1/2 cups all-purpose flour</li>
                        <li>2 tablespoons olive oil</li>
                        <li>1 teaspoon salt</li>
                        <li>1/4 teaspoon garlic powder</li>
                        <li>1/4 teaspoon dried oregano</li>
                        <li>1/4 teaspoon dried basil</li>
                        <li>1/4 teaspoon ground black pepper</li>
                        <li>1 cup pizza sauce</li>
                        <li>2 cups shredded mozzarella cheese</li>
                        <li>Assorted toppings: pepperoni, mushrooms, bell peppers, onions, etc.</li>
                    </ul>
                </div>
                <div className='sub-background'>
                    <h3 className='subtitle'>Instructions:</h3>
                    <ol>
                        <li>In a small bowl, dissolve yeast and sugar in warm water. Let stand until creamy, about 10 minutes.</li>
                        <li>In a large bowl, combine flour, olive oil, salt, garlic powder, oregano, basil, and black pepper. Stir in the yeast mixture until a dough forms.</li>
                        <li>Knead dough on a lightly floured surface until smooth, about 5 minutes. Place dough in a well-oiled bowl, cover with a damp cloth, and let rise in a warm place until doubled in volume, about 1 hour.</li>
                        <li>Preheat oven to 450 degrees F (230 degrees C). Punch down dough and turn it out onto a lightly floured surface. Divide dough in half and shape into rounds. Place dough on greased pizza pans or baking sheets.</li>
                        <li>Spread pizza sauce over dough rounds. Sprinkle shredded mozzarella cheese over sauce. Add desired toppings.</li>
                        <li>Bake in preheated oven for 15 to 20 minutes, or until crust is golden brown and cheese is bubbly and melted.</li>
                        <li>Remove pizzas from oven and let cool for a few minutes before slicing and serving.</li>
                    </ol>
                </div>
                <h1>Enjoy your homemade pizza!</h1>
            </div>
            <img src={PizzaI} alt="Homemade Pizza" className='carousel-image' />
        </div>
    )
}

export default Pizza;