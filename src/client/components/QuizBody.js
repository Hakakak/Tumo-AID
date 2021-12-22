//@ts-check
import React, { useState } from "react";
import { Link } from "react-router-dom";


function QuizBody(props) {

    const [questions, setQuestion] = useState(props.questions);
    // let uniqueQuestions = props.quiz.questions.filter((value, index, self) =>
    //     index === self.findIndex((t) => (
    //         t.id === value.id
    //     ))
    // )
    let questionIndex = props.index;

    // props.questions.forEach(element => {
    //     if(element.answers.length > 4){
    //         for (let i = element.answers.length; i > 4; i--) {
    //             element.answers.pop();
    //         }
    //     } else if (element.answers < 4){
    //         for (let i = element.answers.length; i < 4; i++) {
    //             element.answers.push({ answer: " other "});
    //         }
        
    //     }
    //     const answers = element.answers.map( ({answer}) => {
    //         return <div className="answers1 answers">
    //                     <p className="questions">{answer}</p><span className="circle"></span>
    //                 </div>
    //     });
    // });

    const updateQuestion = (id) => {
        let questions = props.questions;
        questions = questions.map((question, index) => {
            if(question.id == id){
                console.log("found ya nigga");
                questionIndex = index;
            }
        })
    };


    const questionBody = props.questions.map(({ id, question, quanswers }, index) => {
        if(index == questionIndex){

            if({quanswers}.length > 4){
                for (let i = quanswers.length; i > 4; i--) {
                    quanswers.pop();
                    }
            } else if (quanswers.answers < 4){
                    for (let i = quanswers.length; i < 4; i++) {
                        quanswers.push({ answer: " other "});
                    }
                
                }
            const answers = quanswers.map( ({answer}) => {
                    return <div className="answers1 answers" onClick={() => {this.style.backgroundColor = "white"}}>
                                <p className="questions">{answer}</p><span className="circle"></span>
                            </div>
                });

            return (
              <div className="block2" key = {id}>
                  <div className="question">{question}</div>
                  <img className="img" src = "../images/lus.jpeg" />
                  <div className="qList">{answers}</div>
            </div>
            );
        }
    });
    return {questionBody};
  }

export default QuizBody;

{/* <div className="block2">
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
      </div> */}