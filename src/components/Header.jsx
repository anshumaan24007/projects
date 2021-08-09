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

    render() {
        return (
            <div className="headerContainer">
                <div className="logoContainer"></div>
                <div className="helpContainer"></div>
                <div className="profileContainer">
                    <span className="userIcon"><UserIcon className="userIconSVG"/></span>
                </div>
                <div className="dropdownNav"></div>
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;