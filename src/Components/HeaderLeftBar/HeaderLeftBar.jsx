import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import './HeaderLeftBar.sass';


class HeaderLeftBar extends Component {
    render() {
        return (
            <div className='headerLeftBar'>
                <TextField
                    id="outlined-name"
                    label="Поиск"
                    value={this.props.filter}
                    onChange={this.props.search('filter')}
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="fab" mini color="secondary" aria-label="Add" onClick={this.props.addNewCategoryModalOpen}>
                    <AddIcon />
                </Button>
            </div>
        )
    }

}

export default HeaderLeftBar;