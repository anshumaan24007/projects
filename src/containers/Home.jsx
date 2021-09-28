import React, { Component } from 'react';
import './Home.css';
import Header from '../components/Header';
import Banner from '../components/Banner';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
            <span>
                <Header className="headerHomePage"/>
            </span>
             <span>
                <Banner className="bannerHomePage"/>
            </span>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;