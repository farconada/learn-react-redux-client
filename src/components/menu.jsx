import React from 'react';

const Menu = React.createClass({
    handleClick() {
        this.props.updateState();
    },
    render() {
        return (
            <h1 onClick={this.handleClick}>Menu {this.props.menu.active}</h1>
        );
    }
});

export default Menu;

