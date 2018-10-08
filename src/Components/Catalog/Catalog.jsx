import React, { Component } from 'react';
import LeftBar from '../LeftBar/LeftBar';
import Body from '../Body/Body';
import AddNewCategoryModal from '../AddNewCategoryModal/AddNewCategoryModal';
import defaultCategories from './defaultCategories.js'
import './Catalog.sass';


class Catalog extends Component {
    state = {
        addNewCategoryModal: false,
        categories: defaultCategories,
        products: {},
        selected: null
    }

    choose = (category) => {
        console.log(category)
        this.setState({
            selectedCategory: category
        });
    }

    changeInfoProduct = (newInfo) => {
        console.log(newInfo)
    }

    addNewCategoryModalOpen = () => {
        this.setState({
            addNewCategoryModal: true
        })
    }

    addNewCategory = (newCategory) => {
        let addCategory = {[newCategory.name]:{}}
        for(let key in newCategory.infoAttributes){
                addCategory[newCategory.name][newCategory.infoAttributes[key].name] = {options: newCategory.infoAttributes[key].value.split(','), value: ''};
        }
        this.setState({
            categories: Object.assign(this.state.categories ,addCategory),
            selectedCategory: null
        })
    }

    addNewProduct = (newProduct, date, category) => {
        let addProduct = {[newProduct.name]:{}}
        for(let name in newProduct){
            if(name === 'infoAttributes'){
                for(let key in newProduct[name]){
                    addProduct[newProduct.name][key] = {options: newProduct[name][key].options, value: newProduct[name][key].value}
                }
            }
        }
        addProduct[newProduct.name]['date'] = date;
        addProduct[newProduct.name]['category'] = category;
        this.setState({
            products: Object.assign(this.state.products ,addProduct)
        })
    }


    addNewCategoryModalClose = () => {
        this.setState({
            addNewCategoryModal: false,
        })
    }

    render() {
        return (
            <React.Fragment>
                <AddNewCategoryModal  open = {this.state.addNewCategoryModal} addNewCategoryModalClose = {this.addNewCategoryModalClose} addNewCategory = {this.addNewCategory}/>
                <div className='catalog'>
                    <LeftBar addNewCategoryModalOpen = {this.addNewCategoryModalOpen} products = {this.state.products} categories = {this.state.categories} choose = {this.choose}/>
                    <Body selectedCategory = {this.state.selectedCategory} addNewProduct = {this.addNewProduct} changeInfoProduct = {this.changeInfoProduct}/>
                </div>
            </React.Fragment>
        )
    }

}

export default Catalog;