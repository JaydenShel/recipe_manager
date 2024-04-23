import '../App.css'
import stirFry from '../images/stir_fry.jpg';
import HomeButton from '../components/HomeButton';

const StirFry = () => {
    return (
        <div className='text-background'>
            <HomeButton />
            <div className='text'>
                <h2>Vegetable Stir-Fry Recipe</h2>
                <div className='sub-background'>
                    <h3 className='subtitle'>Ingredients:</h3>
                    <ul>
                        <li>1 cup broccoli florets</li>
                        <li>1 bell pepper, sliced</li>
                        <li>1 carrot, sliced</li>
                        <li>1/2 cup snow peas</li>
                        <li>1/4 cup soy sauce</li>
                        <li>2 tablespoons hoisin sauce</li>
                        <li>2 cloves garlic, minced</li>
                        <li>1 tablespoon sesame oil</li>
                        <li>Cooked rice, for serving</li>
                    </ul>
                </div>
                <div className='sub-background'>
                    <h3 className='subtitle'>Instructions:</h3>
                    <ol>
                        <li>In a wok or large skillet, heat sesame oil over medium-high heat. Add minced garlic and cook until fragrant.</li>
                        <li>Add broccoli florets, sliced bell pepper, sliced carrot, and snow peas to the wok. Stir-fry for 3-4 minutes, or until vegetables are tender-crisp.</li>
                        <li>In a small bowl, whisk together soy sauce and hoisin sauce. Pour the sauce over the vegetables in the wok and toss to coat evenly.</li>
                        <li>Continue cooking for another 1-2 minutes, stirring constantly, until the sauce thickens slightly and coats the vegetables.</li>
                        <li>Serve the vegetable stir-fry hot over cooked rice.</li>
                    </ol>
                </div>
                <h1>Enjoy your delicious vegetable stir-fry!</h1>
            </div>
            <img src={stirFry} alt="Vegetable Stir-Fry" className='carousel-image' />
        </div>
    )
}

export default StirFry;