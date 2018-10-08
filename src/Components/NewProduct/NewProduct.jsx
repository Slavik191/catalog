import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './NewProduct.sass';


class NewProduct extends Component{
    state = {
        name: ''
    }

    shouldComponentUpdate(nextProps){
        if(nextProps !== this.props && nextProps.selectedCategory){
            let infoAttributes = {};
            for(let name in nextProps.selectedCategory){
                for(let key in nextProps.selectedCategory[name]){
                    infoAttributes[key] = '';
                }
            }
            this.setState({infoAttributes})
        }
        return true
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
                changeState[key] = event.target.value
        }

        console.log(event.target.name)
        this.setState({ infoAttributes: changeState });
    };

    render() {
        let selects = [];
        if(this.state.infoAttributes){
            for(let name in this.props.selectedCategory){
                for(let key in this.props.selectedCategory[name]){
                    let menuItem = this.props.selectedCategory[name][key].map(option => {
                        return(
                            <MenuItem value={`${option}`}>{`${option}`}</MenuItem>
                        )
                    });                
                    selects.push(
                        <Select
                        value={this.state.infoAttributes[key]}
                        onChange={this.handleChangeSelects}
                        inputProps={{
                        name: `${key}`
                        }}
                        >
                            <MenuItem value="">
                            <em>{key}</em>
                            </MenuItem>
                            {menuItem}
                        </Select>
                    )
                }
            }
        }
        return(
            <React.Fragment>
                <div className = 'nameProduct'>
                    <TextField
                        id="standard-name"
                        label="Название продукта"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                </div>
                {selects}
            </React.Fragment>
        )
    }

}

export default NewProduct;