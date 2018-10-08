import React, {Component} from 'react';
import HeaderLeftBar from '../HeaderLeftBar/HeaderLeftBar';
import List from '../List/List';
import './LeftBar.sass';

class LeftBar extends Component{
    render(){
        return(
            <div className = 'leftBar'>
                <HeaderLeftBar
                    addNewCategoryModalOpen = {this.props.addNewCategoryModalOpen}
                    search = {this.props.search}
                    filter = {this.props.filter}
                />
                <List 
                    categories = {this.props.categories} 
                    choose = {this.props.choose} 
                    products = {this.props.products}
                    filter = {this.props.filter}
                />
            </div>
        )
    }
}

export default LeftBar;