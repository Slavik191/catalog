import React, {Component} from 'react';
import NewProduct from '../NewProduct/NewProduct';
import './BodyMain.sass';


class BodyMain extends Component{
    render() {
        return(
            <div className = 'bodyMain'>
                <NewProduct selectedCategory = {this.props.selectedCategory} addNewProduct = {this.props.addNewProduct} changeInfoProduct = {this.props.changeInfoProduct}/>
            </div>
        )
    }

}

export default BodyMain;