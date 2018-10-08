import React, { Component } from 'react';
import Product from '../Product/Product'
import './ListProducts.sass';


class ListProducts extends Component {
    render() {
        let list = [];
        for (let key in this.props.products) {
            if(key.indexOf(this.props.filter) !== -1){
                list.push(
                    <Product 
                        name = {key}  
                        key = {key} 
                        choose = {this.props.choose} 
                        product = {{[key]: this.props.products[key]}}
                    />
                )
            }
        }
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default ListProducts;