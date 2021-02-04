import React from 'react';

const User = ({ item }) => {
    return (
            <>
                <td>{item.name.firstName}</td>
                <td>{item.name.surName}</td>
            </>
        );

}

export default User;
