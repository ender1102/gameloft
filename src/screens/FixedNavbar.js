import React from 'react'

export default function FixedNavbar() {
    return (
        <>
            <div className="header">
                <a href="/" className="header__logo">
                    <img src="https://img.enderws.com/gameloft/logo.svg" alt="logo" />
                </a>
                <div className="header__menu">
                    <img src="https://img.enderws.com/gameloft/burger.svg" alt="burger" />
                </div>
            </div>
            <div className="social-icons">
                <a href="/" target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-share-alt"></i>
                </a>
                <a href="/" target="_blank" rel="noreferrer noopener">
                    <i className="far fa-envelope"></i>
                </a>
                <a href="https://gameloft.helpshift.com/hc/en" target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-headset"></i>
                </a>
            </div>
        </>
    )
}
