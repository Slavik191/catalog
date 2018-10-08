import React from 'react';
import './Product.sass';


let Product = (props) => {
    let chooseProduct = () => {
        props.choose(props.product)
    }
    console.log(props)

    return (
        <div className='product' onClick = {chooseProduct}>
            {props.name}
        </div>
    )
}

export default Product;