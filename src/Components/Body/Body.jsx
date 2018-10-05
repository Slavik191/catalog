import React, {Component} from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import './Body.sass';


class Body extends Component{
    render() {
        return(
            <div className = 'body'>
                <HeaderBody />
            </div>
        )
    }

}

export default Body;