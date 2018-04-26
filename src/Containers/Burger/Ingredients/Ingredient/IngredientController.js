import React from 'react'
import classes from './IngredientController.css'

const IngredientController = (props) => {
   return (
        <div className="clearfix">
                <div className={classes.Control + '  sm-col-6 left'} >{props.children}</div>
                <div className=" sm-col-6 right ">
               <div className="clearfix px1">
                    <div className={'col sm-col-3 ' + classes.less} onClick={props.remove}>
                        <div className={classes.btn + ' circle'}>-</div>
                    </div>
                    <div className="col sm-col-6 ">
                        <div className={classes.Count}>{props.count}</div>
                    </div>
                   <div className={'col sm-col-3 ' + classes.more} onClick={props.add}>
                        <div className={classes.btn + ' circle'}>+</div>
                    </div>
                    </div>
                </div> 
            </div>
    )
}

export default IngredientController;