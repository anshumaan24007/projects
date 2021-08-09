import React, { Component } from 'react';
import Header from '../components/Header';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;