import React, {Component} from 'react';
import NewProduct from '../NewProduct/NewProduct';
import './BodyMain.sass';


class BodyMain extends Component{
    render() {
        return(
            <div className = 'bodyMain'>
                <NewProduct 
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

export default BodyMain;