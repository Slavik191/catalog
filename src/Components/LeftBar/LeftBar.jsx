import React, {Component} from 'react';
import HeaderLeftBar from '../HeaderLeftBar/HeaderLeftBar';
import List from '../List/List';
import './LeftBar.sass';

class LeftBar extends Component{
    render(){
        return(
            <div className = 'leftBar'>
                <HeaderLeftBar />
                <List />
            </div>
        )
    }
}

export default LeftBar;