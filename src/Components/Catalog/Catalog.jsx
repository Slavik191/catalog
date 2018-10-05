import React, {Component} from 'react';
import LeftBar from '../LeftBar/LeftBar';
import Body from '../Body/Body';
import './Catalog.sass';


class Catalog extends Component{
    render() {
        return(
            <div className = 'catalog'>
                <LeftBar />
                <Body />
            </div>
        )
    }

}

export default Catalog;