import React, {Component} from 'react';
import BodyMain from '../BodyMain/BodyMain'
import './Body.sass';


class Body extends Component{
    render() {
        return(
            <div className = 'body'>
                <BodyMain 
                    selected = {this.props.selected} 
                    addNewProduct = {this.props.addNewProduct} 
                    changeInfoProduct = {this.props.changeInfoProduct}
                    deleteCategory = {this.props.deleteCategory}
                    deleteProduct = {this.props.deleteProduct}                    
                />
            </div>
        )
    }

}

export default Body;