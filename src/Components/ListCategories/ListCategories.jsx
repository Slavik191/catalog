import React, { Component } from 'react';
import Category from '../Category/Category'
import './ListCategories.sass';


class ListCategories extends Component {
    render() {
        let list = [];
        for (let key in this.props.categories) {
            if(key.indexOf(this.props.filter) !== -1){
                list.push(
                    <Category 
                        name = {key}  
                        key = {key} 
                        choose = {this.props.choose} 
                        category = {{[key]: this.props.categories[key]}}
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

export default ListCategories;