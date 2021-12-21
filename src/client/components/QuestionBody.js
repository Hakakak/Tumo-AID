//@ts-check
import React from "react";
import { Link } from "react-router-dom";

class QuestionBody extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return <div className="block2">
        <div className="question"></div>
        <img className="img" src = "../images/lus.jpeg" />
        <div className="qList">
            <div className="answers1 answers">
                <p className="questions"></p><span className="circle"></span>
            </div>
            <div className="answers2 answers">
                <p className="questions"></p><span className="circle"></span>
            </div>
            <div className="answers3 answers">
                <p className="questions"></p><span className="circle"></span>
            </div>
            <div className="answers4 answers">
                <p className="questions"></p><span className="circle"></span>
            </div>
        </div>
    </div>
    }
}

export default QuestionBody;