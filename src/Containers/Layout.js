import React from 'react'

const layout = (props) => {
    return  <div className="clearfix">
        {props.children || null}
        
    </div>
}

export default layout;