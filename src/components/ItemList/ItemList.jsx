import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Preloader from '../common/Preloader';

const ItemList = ({ getData, onItemSelected, renderItem }) => {
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData().then((data) => {
            updateList(data);
        });
    }, [getData]);

    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderItem(item);
            return (
                <li
                    key={id}
                    className='list-group-item'
                    onClick={() => onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
    };

    if (!itemList) {
        return <Preloader />;
    }

    const items = renderItems(itemList);

    return <ul className='item-list list-group'>{items}</ul>;
};

export default ItemList;
