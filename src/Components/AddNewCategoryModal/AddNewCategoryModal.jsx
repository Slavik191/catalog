import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import './AddNewCategoryModal.sass';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AddNewCategoryModal extends Component {
    state = {
        name: '',
        infoAttributes: {attribute1: {name: '', value: ''}},
        quantity: 2
    }

    newAttribute = () => {
        let infoAttributes = this.state.infoAttributes;
        infoAttributes = Object.assign(infoAttributes, {[`attribute${this.state.quantity}`]: {name: '', value: ''}})
        this.setState({
            infoAttributes: infoAttributes,
            quantity: ++this.state.quantity
        });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleChangeAttributeName = name => event => {
        let infoAttributes = this.state.infoAttributes;
        for(let key in infoAttributes){
            if(key === name){
                infoAttributes[key].name = event.target.value;
            }
        }
        this.setState({
            infoAttributes: infoAttributes
        });
    };

    handleChangeAttributeValue = name => event => {
        let infoAttributes = this.state.infoAttributes;
        for(let key in infoAttributes){
            if(key === name){
                infoAttributes[key].value = event.target.value;
            }
        }
        this.setState({
            infoAttributes: infoAttributes
        });
    };

    addNewCategory = () => {
        this.addNewCategoryModalClose();        
        this.props.addNewCategory(this.state);
    }

    addNewCategoryModalClose = () => {
        this.props.addNewCategoryModalClose();
        this.setState({
            name: '',
            infoAttributes: {attribute1: {name: '', value: ''}},
            quantity: 2
        })
    }

    render() {
        let newAttributes = []
        for(let i = 1; i < this.state.quantity; i++){
            newAttributes.push(
            <div className = 'newAttribute' key = {i}>
                <TextField
                label="Название категории"
                value={this.state.infoAttributes[`attribute${i}`].name}
                onChange={this.handleChangeAttributeName(`attribute${i}`)}
                margin="normal"
                />
                <TextField
                label="Значения"
                multiline
                rows = '2'
                rowsMax="2"
                value={this.state.infoAttributes[`attribute${i}`].value}
                onChange={this.handleChangeAttributeValue(`attribute${i}`)}
                margin="normal"
                />
            </div>
            )
        } 
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {'Новая категория'}
                </DialogTitle>
                <DialogContent>
                    <div className = 'nameCategory'>
                        <TextField
                            id="standard-name"
                            label="Название категории"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                    </div>
                    {newAttributes}
                    <div className = 'buttonModal'>
                        <Button variant="fab" mini color="secondary" aria-label="Add" onClick = {this.newAttribute}>
                            <AddIcon />
                        </Button> 
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.addNewCategoryModalClose} color="primary">
                        Закрыть
                    </Button>
                    <Button onClick = {this.addNewCategory} color="primary">
                        Создать
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default AddNewCategoryModal;