import React from 'react';

const Address = ({ item }) => {
    return (
        <>
            <td>{item.address.country}</td>
            <td>{item.address.city}</td>
            <td>{`${item.address.street.name}, ${item.address.street.number}`}</td>
            <td>{item.id.zip}</td>
        </>
        );

}

export default Address;