import React, {Component} from 'react'
import Ingredients from './Ingredients/Ingredients';
import BurgerControl from './BurgerControl'
import classes from './Ingredients/Ingredients.css'
import Panini from '../../img/Panini.png'
import PaniniTop from '../../img/PaniniTop.png'
import PaniniBottom from '../../img/PaniniBottom.png'
import PaniniBottomX from '../../img/PaniniBottomX.png'


class BurgerUI extends Component{

    state = {
        ingredients : {
            'Farmer\'s chedder': { count: 0, max: 4, rate: 0.5 },
            'bacon strip': { count: 0, max: 5, rate: 0.5  },
            'sausage': { count: 0, max: 2, rate: 0.7 },
          },
        buying: {
          show  : false
        }
    }
    ingredients = () => {
        const ingredients = {...this.state.ingredients};

        const count = Object.keys(ingredients).map((v) => { return ingredients[v].count }).reduce((a, b) => a + b); 
        return count <= 0 
            ? (<div>
                <div className={classes.PaniniBottom}>
                    <img src={PaniniTop} />
                </div>
                <p> Please add your ingredients </p>
                <div className={classes.PaniniBottom}>
                    <img src={PaniniBottomX} />
                </div>
            </div> )
            : (<div>
                <div className={classes.PaniniBottom}>
                    <img src={PaniniTop}/>
                </div>
                <Ingredients items={ingredients} />
                <div className={classes.PaniniBottom}>
                    <img src={PaniniBottomX} />
                </div>
            </div>);
    }
    addEntryHandler = (event) => {
        const ingredients = { ...this.state.ingredients };
 
        if (ingredients[event].count >= 0 && ingredients[event].count <= (ingredients[event].max -1) ){
            ingredients[event].count += 1
        } 
        this.setState({ ingredients });

    }

    removeEntryHandler = (event) => {
        const ingredients = { ...this.state.ingredients };
        
        if (ingredients[event].count > 0 ) {
            ingredients[event].count -= 1
        }
        this.setState({ ingredients }); 
    }

    ModalActivate = (modalStatus) => {
        console.log(modalStatus)
        this.setState({
            buying: {
                show: true
            }
        });
        console.log(this.state)
        console.log(this.state.buying.show)

    }
    backdrop = (status) => {
        console.log(status) 
    }

    render() {
        return (<div className= "clearfix" >
                    <div className="sm-col-8 md-col-6 lg-col-6 px4 mx-auto">
                        <div className="center"> 
                            {this.ingredients()}
                        </div>
                    </div>
            <div className="sm-col-8 md-col-6 lg-col-6 px4 mx-auto">
                <div className="center"> 
                    <BurgerControl 
                        addEntryHandler={this.addEntryHandler} 
                        removeEntryHandler={this.removeEntryHandler} 
                        ingredients={this.state.ingredients}
                        buying={this.ModalActivate}
                        showModal={this.state.buying.show}
                        backdrop={this.backdrop} 
                        >
                    </BurgerControl>

                </div>
            </div>
        </div>)
    }
} 

export default BurgerUI;