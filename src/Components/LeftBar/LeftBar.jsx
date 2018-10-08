import React, {Component} from 'react';
import HeaderLeftBar from '../HeaderLeftBar/HeaderLeftBar';
import List from '../List/List';
import './LeftBar.sass';

class LeftBar extends Component{
    render(){
        return(
            <div className = 'leftBar'>
                <HeaderLeftBar addNewCategoryModalOpen = {this.props.addNewCategoryModalOpen}/>
                <List categories = {this.props.categories} choose = {this.props.choose} products = {this.props.products}/>
            </div>
        )
    }
}

export default LeftBar;