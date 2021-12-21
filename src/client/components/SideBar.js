//@ts-check
import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return <div className="block1">
        <div className="questionBullets">
            <div className="questionBullets_block">
                    <div className="number">
                        1
                    </div>
                    <p>Question</p>
                </div>
                <div className="icons">
                        
                </div>
            </div>
    <div className="questionBullets">
            <div className="questionBullets_block">
                <div className="number">
                    1
                </div>
                <p>Question</p>
            </div>
            <div className="icons">
                    
            </div>
        </div>
        <div className="questionBullets">
                <div className="questionBullets_block">
                    <div className="number">
                        1
                    </div>
                    <p>Question</p>
                </div>
                <div className="icons">
                        
                </div>
            </div>
            <div className="questionBullets">
                    <div className="questionBullets_block">
                        <div className="number">
                            1
                        </div>
                        <p>Question</p>
                    </div>
                    <div className="icons">
                            
                    </div>
                </div>
                <div className="questionBullets">
                        <div className="questionBullets_block">
                            <div className="number">
                                1
                            </div>
                            <p>Question</p>
                        </div>
                        <div className="icons">
                                
                        </div>
                    </div>
        </div>
    
    }
}

export default SideBar;