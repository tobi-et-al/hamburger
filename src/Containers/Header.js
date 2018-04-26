import React from 'react'
import classes from './Header.css'

const header = (props) => {
    return <div  className={classes.Header}>
        <div className="sm-col-8 md-col-6 lg-col-6 py4 mx-auto">
            <div className="center">{props.children || null}</div>
        </div>
    </div>
}

export default header;