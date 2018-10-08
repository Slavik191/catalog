import React, { Component } from 'react';
import ListCategories from '../ListCategories/ListCategories';
import ListProducts from '../ListProducts/ListProducts';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './List.sass';


class List extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        return (
            <div className='list'>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Категории" />
                        <Tab label="Товары" />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <ListCategories categories={this.props.categories} choose={this.props.choose} />}
                {this.state.value === 1 && <ListProducts products={this.props.products} choose={this.props.choose} />}
            </div>
        )
    }

}

export default List;