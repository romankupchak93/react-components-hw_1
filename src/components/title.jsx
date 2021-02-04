import React from 'react';
import logo from './logo.svg';

export function Title() {
    return (
        <div className="App mb-4">
            <header className="App-header">
                <h1 className="text-center">
                    <img src={logo} className="App-logo" alt="logo" style={{maxWidth: "150px"}} />
                    HW 1 - React Components. State.
                </h1>
            </header>
        </div>
    );
}