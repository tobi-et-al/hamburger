import React from 'react'
import classes from '../Header.css'

const OrderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients).map((v, i) => {

         return (
            <div key={i} className="clearfix py1 px3 ">
                <div className="sm-col sm-col-6 left-align "><span className="caps">{v}</span></div>
                <div className="sm-col sm-col-6 center ">
                     {'£ ' + props.ingredients[v].rate * props.ingredients[v].count} (<span className="h6">{props.ingredients[v].rate}</span>)
                </div>
            </div>    
            
            )
    });

    return (
        <div className="py4">
            <p className="h1 center">Order Summary</p>

            {ingredients}
        </div>
    );
}

export default OrderSummary;