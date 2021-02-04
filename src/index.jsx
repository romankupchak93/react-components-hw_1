import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Title } from './components/title';
import { ComponentA } from './components/Task1/componentA';
import { Footer } from './components/footer';
import UserList from "./components/Task2/UserList";

const userList = [
    {
        "active": true,
        "name": {
            "firstName": "James",
            "surName": "Harden"
        },
        "address": {
            "street": {
                "number": 122,
                "name": "Franklin Street"
            },
            "city": "Los Angeles, California",
            "country": "USA",
        },
        "id": {
            "zip": "10002"
        }
    },
    {
        "active": false,
        "name": {
            "firstName": "Khris",
            "surName": "Middleton"
        },
        "address": {
            "street": {
                "number": 22,
                "name": "Main st."
            },
            "city": "Charleston, South Carolina",
            "country": "USA",
        },
        "id": {
            "zip": "29402"
        }
    },
    {
        "active": true,
        "name": {
            "firstName": "Joel",
            "surName": "Embiid"
        },
        "address": {
            "street": {
                "number": 21,
                "name": "Nkozoa"
            },
            "city": "Yaoundé",
            "country": "Cameroon",
        },
        "id": {
            "zip": "none"
        }
    },
    {
        "active": false,
        "name": {
            "firstName": "Kelly",
            "surName": "Olynyk"
        },
        "address": {
            "street": {
                "number": 9,
                "name": "Goodwood Park"
            },
            "city": "Toronto",
            "country": "Canada",
        },
        "id": {
            "zip": "66777"
        }
    },
    {
        "active": true,
        "name": {
            "firstName": "Kevin",
            "surName": "Durant"
        },
        "address": {
            "street": {
                "number": 35,
                "name": "Ave Winnipeg"
            },
            "city": "Washington, D.C.",
            "country": "USA",
        },
        "id": {
            "zip": "20003"
        }
    },
];


ReactDOM.render(
    <>
        <Title />
        <ComponentA />
        <UserList users={userList}/>
        <Footer />
    </>,
    document.getElementById('root'));