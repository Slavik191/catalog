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
        selected: null,
        filter: ''
    }

    search = name => event => {
        this.setState({
            [name]: event.target.value.trim(),
        });
    }

    deleteCategory = (nameCategory) => {
        let categories = this.state.categories;
        let newCategories = {};
        for (let name in categories) {
            if (name !== nameCategory)
                newCategories[name] = categories[name]
        }
        this.setState({
            categories: newCategories,
            selected: null
        })
    }

    deleteProduct = (nameProduct) => {
        let products = this.state.products;
        let newProducts = {};
        for (let name in products) {
            if (name !== nameProduct)
                newProducts[name] = products[name]
        }
        this.setState({
            products: newProducts,
            selected: null
        })
    }

    choose = (category) => {
        this.setState({
            selected: category
        });
    }

    changeInfoProduct = (newInfo) => {

        let products = this.state.products;
        for (let key in products) {
            if (newInfo.name === key) {
                products[key] = newInfo.infoAttributes;
                break;
            }
        }
        this.setState({
            products: products
        });
    }

    addNewCategoryModalOpen = () => {
        this.setState({
            addNewCategoryModal: true
        })
    }

    addNewCategory = (newCategory) => {
        if(!newCategory.name){
            alert('Введите имя!');
            return false;
        }
        let addCategory = { [newCategory.name]: {} }
        for (let key in newCategory.infoAttributes) {
            addCategory[newCategory.name][newCategory.infoAttributes[key].name] = { options: newCategory.infoAttributes[key].value.split(','), value: '' };
        }
        this.setState({
            categories: Object.assign(this.state.categories, addCategory),
            selected: null
        })
    }

    addNewProduct = (newProduct, date, category) => {
        if(!newProduct.name){
            alert('Введите имя!');
            return false;
        }
        let addProduct = { [newProduct.name]: {} }
        for (let key in newProduct.infoAttributes) {
            addProduct[newProduct.name][key] = { options: newProduct.infoAttributes[key].options, value: newProduct.infoAttributes[key].value }
        }
        addProduct[newProduct.name]['date'] = date;
        addProduct[newProduct.name]['category'] = category;
        this.choose(addProduct);
        this.setState({
            products: Object.assign(this.state.products, addProduct)
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
                <AddNewCategoryModal
                    open={this.state.addNewCategoryModal}
                    addNewCategoryModalClose={this.addNewCategoryModalClose}
                    addNewCategory={this.addNewCategory}
                />
                <div className='catalog'>
                    <LeftBar
                        addNewCategoryModalOpen={this.addNewCategoryModalOpen}
                        products={this.state.products} categories={this.state.categories}
                        choose={this.choose}
                        search = {this.search}
                        filter = {this.state.filter}
                    />
                    <Body
                        selected={this.state.selected}
                        addNewProduct={this.addNewProduct}
                        changeInfoProduct={this.changeInfoProduct}
                        deleteCategory={this.deleteCategory}
                        deleteProduct={this.deleteProduct}
                    />
                </div>
            </React.Fragment>
        )
    }

}

export default Catalog;