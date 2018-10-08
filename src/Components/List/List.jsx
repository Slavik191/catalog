import React, {Component} from 'react';
import ListCategories from '../ListCategories/ListCategories';
import './List.sass';


class List extends Component{
    render() {
        return(
            <div className = 'list'>
                <ListCategories  categories = {this.props.categories} chooseCategory = {this.props.chooseCategory}/>
            </div>
        )
    }

}

export default List;