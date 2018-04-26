import React from 'react'
import Ingredient from './Ingredient/Ingredient';
import classes from './Ingredients.css'

const Ingredients = (props) => {

    let UIingredient = null;
    const updateIngredient = () => {    
        var ingredients = (props.items);

        UIingredient = Object.keys(props.items).map((igItem, igKey) => {
            return Array(ingredients[igItem].count).fill(igItem).map((igsItem, igsKey) => {
                return <Ingredient key={igsKey + igsItem} >{igItem}</Ingredient>
            })
        });  
    };
    
    updateIngredient()

    return (
        <div>
            {UIingredient}
        </div>
    );
}

export default Ingredients;