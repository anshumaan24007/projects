import React, { Component } from 'react';
import {render} from "react-dom";
import './Banner.css';
import ReactSVG from "react-svg";
import {ReactComponent as UserIcon} from "../assets/icons/profile-user.svg";
import usaflag from "../assets/images/luke-michael-Tdwu35bCUj0-unsplash.jpg"

class Banner extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="bannerContainer">
                    <img alt="bannerPicture"src={usaflag} className="americanFlag"/>
            </div>
        );
    }
}

Banner.propTypes = {

};

export default Banner;