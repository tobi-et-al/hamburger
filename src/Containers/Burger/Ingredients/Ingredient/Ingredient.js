import React from 'react'
import PaniniCheese from '../../../../../src/img/PaniniCheese.png'
import PaniniSausage from '../../../../../src/img/PaniniSausage.png'
import PaniniBacon from '../../../../../src/img/PaniniBacon.png'

const Ingredient = (props) => {

    const mapIg = (items) => {
        let  element;
        switch (items.children) {
            case 'Farmer\'s chedder':
                element = (<div>
                    <img src={PaniniCheese} />
                </div>)
                break;
            case 'salami slice':
                element = <div> {items.children} </div>
                break; 
            case 'bacon strip':
                element = (<div>
                    <img src={PaniniBacon} />
                </div>)                
                break;
            case 'avocado slice':
                element = <div> {items.children} </div>
                break;
            case 'sausage':
                element = (<div>
                    <img src={PaniniSausage} />
                </div>)
                break;
            default:
                element = null
                break;
            } 
        return element;
    } 

    return (
        mapIg(props)
    )
}

export default Ingredient;