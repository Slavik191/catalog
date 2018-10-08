import React, { Component } from 'react';
import LeftBar from '../LeftBar/LeftBar';
import Body from '../Body/Body';
import AddNewCategoryModal from '../AddNewCategoryModal/AddNewCategoryModal'
import './Catalog.sass';


class Catalog extends Component {
    state = {
        addNewCategoryModal: false,
        categories: {},
        selectedCategory: null
    }

    chooseCategory = (categories) => {
        this.setState({
            selectedCategory: categories
        });
    }

    addNewCategoryModalOpen = () => {
        this.setState({
            addNewCategoryModal: true
        })
    }

    addNewCategory = (newCategory) => {
        let addCategory = {[newCategory.name]:{}}
        for(let key in newCategory){
            if(newCategory[key].name){
                addCategory[newCategory.name][newCategory[key].name] = newCategory[key].value.split(',');
            }
        }
        this.setState({
            categories: Object.assign(this.state.categories ,addCategory)
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
                <LeftBar addNewCategoryModalOpen = {this.addNewCategoryModalOpen} categories = {this.state.categories} chooseCategory = {this.chooseCategory}/>
                <Body selectedCategory = {this.state.selectedCategory}/>
            </div>
            </React.Fragment>
        )
    }

}

export default Catalog;