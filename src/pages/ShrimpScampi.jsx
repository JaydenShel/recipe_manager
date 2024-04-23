import '../App.css'
import shrimpScampi from '../images/shrimp_scampi.jpg';
import HomeButton from '../components/HomeButton';

const ShrimpScampi = () => {
    return (
        <div className='text-background'>
            <HomeButton />
            <div className='text'>
                <h2>Shrimp Scampi Recipe</h2>
                <div className='sub-background'>
                    <h3 className='subtitle'>Ingredients:</h3>
                    <ul>
                        <li>1 pound large shrimp, peeled and deveined</li>
                        <li>8 ounces linguine pasta</li>
                        <li>4 tablespoons unsalted butter</li>
                        <li>4 cloves garlic, minced</li>
                        <li>1/4 teaspoon red pepper flakes (optional)</li>
                        <li>1/4 cup white wine (optional)</li>
                        <li>1/4 cup fresh lemon juice</li>
                        <li>1/4 cup chopped fresh parsley</li>
                        <li>Salt and black pepper to taste</li>
                        <li>Grated Parmesan cheese for serving</li>
                    </ul>
                </div>
                <div className='sub-background'>
                    <h3 className='subtitle'>Instructions:</h3>
                    <ol>
                        <li>Cook linguine pasta according to package instructions. Drain and set aside.</li>
                        <li>In a large skillet, melt butter over medium heat. Add minced garlic and red pepper flakes (if using). Cook for 1-2 minutes, stirring frequently.</li>
                        <li>Add shrimp to the skillet and cook until pink and opaque, about 2-3 minutes per side.</li>
                        <li>If using white wine, pour it into the skillet and allow it to simmer for 1-2 minutes.</li>
                        <li>Add lemon juice and chopped parsley to the skillet. Season with salt and black pepper to taste. Stir to combine.</li>
                        <li>Add cooked linguine pasta to the skillet and toss to coat in the shrimp scampi sauce.</li>
                        <li>Remove from heat and serve immediately, garnished with grated Parmesan cheese.</li>
                    </ol>
                </div>
                <h1>Enjoy your delicious shrimp scampi!</h1>
            </div>
            <img src={shrimpScampi} alt="Shrimp Scampi" className='carousel-image' />
        </div>
    )
}

export default ShrimpScampi;