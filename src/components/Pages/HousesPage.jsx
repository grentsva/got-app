import React, { Component } from 'react';
import ItemList from '../ItemList';
import ItemDetails, { Field } from '../ItemDetails';
import ErrorMessage from '../common/ErrorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../RowBlock';

export default class HousesPage extends Component {
    gotService = new gotService();

    state = {
        selectedHouse: null,
        error: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        });
    };

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />;
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({ name }) => name}
            />
        );

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse}
            >
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
            </ItemDetails>
        );

        return <RowBlock left={itemList} right={itemDetails} />;
    }
}