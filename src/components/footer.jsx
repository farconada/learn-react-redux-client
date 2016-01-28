import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h2>Footer: {this.props.footer.message}</h2>
            </footer>
        );
    }
}