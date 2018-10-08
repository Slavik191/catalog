import React from 'react';
import './Category.sass';


let Category = (props) => {
    let chooseCategory = () => {
        props.choose(props.category)
    }
    return (
        <div className='category' onClick = {chooseCategory}>
            {props.name}
        </div>
    )
}

export default Category;