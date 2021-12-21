//@ts-check
import React from "react";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
                <div className="header">
                    <div>
                        <img className="logo" src="../images/tumo_logo_bnw_white.png" alt="logo" />
                    </div>
                    <div className="headerBlock">
                        <div>
                            <p>Preview</p>
                        </div>

                        <div className="exit">
                            <p>Exit</p>
                        </div>
                        <div>
                            <p className="done">Done </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default NavigationBar;