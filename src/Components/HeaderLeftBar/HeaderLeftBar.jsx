import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './HeaderLeftBar.sass';


class HeaderLeftBar extends Component{
    render() {
        return(
            <div className = 'headerLeftBar'>
                <Button variant="fab" mini color="secondary" aria-label="Add" onClick = {this.props.addNewCategoryModalOpen}>
                    <AddIcon />
                </Button> 
            </div>
        )
    }

}

export default HeaderLeftBar;