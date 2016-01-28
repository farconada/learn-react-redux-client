import React from 'react';
import { connect } from 'react-redux';

import Footer from './footer';
import Menu from './menu';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Menu menu={this.props.menu} updateState={() =>this.props.dispatch({})}/>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    <Footer footer={this.props.footer}/>
                </div>
            </div>
        );
    }
}

export default connect(state => ({ menu: state.menu, footer: state.footer}))(App);