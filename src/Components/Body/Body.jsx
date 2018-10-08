import React, {Component} from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import BodyMain from '../BodyMain/BodyMain'
import './Body.sass';


class Body extends Component{
    render() {
        return(
            <div className = 'body'>
                <HeaderBody />
                <BodyMain selectedCategory = {this.props.selectedCategory} addNewProduct = {this.props.addNewProduct} changeInfoProduct = {this.props.changeInfoProduct}/>
            </div>
        )
    }

}

export default Body;