import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import './NewProduct.sass';


class NewProduct extends Component{
    state = {
        nameCategory: '',
        name: '',
        infoAttributes: null
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.selected){
            let infoAttributes = {};
            for(let name in nextProps.selected){
                if(name === prevState.nameCategory)
                    return null                    
                for(let key in nextProps.selected[name]){
                    if(key !== 'date' && key !== 'category')
                        infoAttributes[key] = {options: nextProps.selected[name][key].options, value: nextProps.selected[name][key].value};
                    else if(key !== 'date')
                        infoAttributes[key] = nextProps.selected[name][key];
                    else
                        infoAttributes[key] = nextProps.selected[name][key];
                }
                return {
                            infoAttributes:infoAttributes,
                            nameCategory: name,
                            name: nextProps.selected[name].date ? name : ''
                        }
            }
        }
    }

    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleChangeSelects = event => {
        let changeState = this.state.infoAttributes;
        for(let key in changeState){
            if(key === event.target.name)
                changeState[key].value = event.target.value
        }
        this.setState({ infoAttributes: changeState });
    };

    giveInfoNewProduct = () => {
        this.props.addNewProduct(this.state, new Date(), this.state.nameCategory);
    }

    changeInfoProduct = () => {
        this.props.changeInfoProduct(this.state);
    }

    deleteCategory = () => {
        this.props.deleteCategory(this.state.nameCategory);
        this.setState({
            nameCategory: '',
            name: '',
            infoAttributes: null
        })
    }

    deleteProduct = () => {
        this.props.deleteProduct(this.state.name); 
        this.setState({
            nameCategory: '',
            name: '',
            infoAttributes: null
        })                  
    }                    
    

    render() {
        let selects = [];
        if(this.state.infoAttributes){
            selects.push(
                <div className = 'nameProduct' key = {'name'}>
                    <TextField
                        id="standard-name"
                        label="Название продукта"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <div className = 'delete'>
                        <IconButton 
                            aria-label="Delete" 
                            onClick = {this.state.infoAttributes.date ? this.deleteProduct : this.deleteCategory}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            )
            for(let name in this.props.selected){
                for(let key in this.props.selected[name]){
                    if(key !== 'date' && key !== 'category'){
                        let menuItem = this.props.selected[name][key].options.map(option => {
                        return(
                            <MenuItem 
                                key = {option} 
                                value={`${option}`}
                            >
                                {`${option}`}
                            </MenuItem>
                        )
                    });                
                    selects.push(
                        <FormControl key = {key}>
                            <InputLabel>{key}</InputLabel>
                            <Select
                            value={this.state.infoAttributes[key].value}
                            onChange={this.handleChangeSelects}
                            inputProps={{
                            name: `${key}`
                            }}
                            >
                                <MenuItem value=''>
                                <em><b>{key}</b></em>
                                </MenuItem>
                                {menuItem}
                            </Select>
                        </FormControl>
                    )}
                }
            }
        }
        return(
            <React.Fragment>
                {selects}
                {this.props.selected && <div className = 'buttons'>
                    <div >
                        {this.state.infoAttributes.date && <div className = 'category'>Категория: {this.state.infoAttributes.category}</div>}                        
                        {this.state.infoAttributes.date && <div className = 'date'>Дата создания: {this.state.infoAttributes.date.toLocaleString()}</div>}
                    </div>
                    <Button onClick = {this.state.infoAttributes.date ? this.changeInfoProduct : this.giveInfoNewProduct} color="primary">
                            {this.state.infoAttributes.date ? 'Сохранить' : 'Создать'}
                    </Button>
                </div>
                }
            </React.Fragment>
        )
    }

}

export default NewProduct;