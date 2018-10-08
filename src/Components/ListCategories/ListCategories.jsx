import React, { Component } from 'react';
import Category from '../Category/Category'
import './ListCategories.sass';


class ListCategories extends Component {
    render() {
        let list = [];
        for (let key in this.props.categories) {
            list.push(
                <Category name = {key}  key = {key} chooseCategory = {this.props.chooseCategory} category = {{[key]: this.props.categories[key]}}/>
            )
        }
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default ListCategories;