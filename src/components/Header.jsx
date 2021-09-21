import React, { Component } from 'react';
import {render} from "react-dom";
import './Header.css';
import ReactSVG from "react-svg";
import {ReactComponent as UserIcon} from "../assets/icons/profile-user.svg";

class Header extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    displayImageFn(){
        
    }

    render() {
        return (
            <div className="headerContainer">
               United States Of America.
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;