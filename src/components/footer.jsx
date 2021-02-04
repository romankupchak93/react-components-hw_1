import React from 'react';
import link from './github.svg';

export function Footer() {
    return (
        <div className="footer">
            <a className="App-link" href="https://github.com/romankupchak93" target="_blank" rel="noopener noreferrer">
                <img src={link} className="App-logo mb-3" alt="logo" style={{maxWidth: "80px"}} />
            </a>
        </div>
    );
}