import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import './NewProduct.sass';


class NewProduct extends Component{
    state = {
        nameCategory: '',
        name: '',
        infoAttributes: null
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.selectedCategory){
            let infoAttributes = {};
            for(let name in nextProps.selectedCategory){
                if(name === prevState.nameCategory)
                    return null                    
                for(let key in nextProps.selectedCategory[name]){
                    if(key !== 'date' && key !== 'category')
                        infoAttributes[key] = {options: nextProps.selectedCategory[name][key].options, value: nextProps.selectedCategory[name][key].value};
                    else if(key !== 'date')
                        infoAttributes[key] = nextProps.selectedCategory[name][key];
                    else
                        infoAttributes[key] = nextProps.selectedCategory[name][key];
                }
                return {infoAttributes:infoAttributes, nameCategory: name}
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
        // this.setState({
        //     nameCategory: '',
        //     name: '',
        //     infoAttributes: null
        // })
    }

    changeInfoProduct = () => {
        this.props.changeInfoProduct(this.state);
    }

    render() {
        let selects = [];
        if(this.state.infoAttributes){
            selects.push(
                <div className = 'nameProduct'>
                    <TextField
                        id="standard-name"
                        label="Название продукта"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                </div>
            )
            for(let name in this.props.selectedCategory){
                for(let key in this.props.selectedCategory[name]){
                    if(key !== 'date' && key !== 'category'){
                        let menuItem = this.props.selectedCategory[name][key].options.map(option => {
                        return(
                            <MenuItem value={`${option}`}>{`${option}`}</MenuItem>
                        )
                    });                
                    selects.push(
                        <FormControl>
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
                {this.props.selectedCategory && <div className = 'buttons'>
                    <Button onClick = {this.infoAttributes.date ? this.changeInfoProduct : this.giveInfoNewProduct} color="primary">
                            {this.infoAttributes.date ? 'Сохранить' : 'Создать'}
                    </Button>
                </div>}
            </React.Fragment>
        )
    }

}

export default NewProduct;