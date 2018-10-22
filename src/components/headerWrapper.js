import React, { Component } from 'react';

class HeaderWrapper extends Component {
    render() {
        return (
            <div className="header-wrapper">
            <h1 className="header-wrapper__title">Welcome to HOA</h1>
            <h2 className="header-wrapper__subtitle">something</h2>
            {this.props.children}
            </div>
        )
    }
}
export default HeaderWrapper;