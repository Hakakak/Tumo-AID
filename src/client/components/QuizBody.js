
import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuestionBody from "./QuestionBody";

const QuizBody = (props) => {

    // let uniqueQuestions = props.quiz.questions.filter((value, index, self) =>
    //     index === self.findIndex((t) => (
    //         t.id === value.id
    //     ))
    // )

    // let uniqueQuestions = props.questions.filter((value, index, self) =>
    //     index === self.findIndex((t) => (
    //         t.id === value.id
    //     ))
    // )


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

    // const updateQuestion = (id) => {
    //     let questions = props.questions;
    //     questions = questions.map((question, index) => {
    //         if(question.id == id){
    //             console.log("found ya nigga");
    //             index = index;
    //         }
    //     })
    // };

    // console.log(props);
    // console.log(props.quiz);
    // console.log(props.quiz.questions);

    const questionBody = props.quiz.questions.map(({ id, question, answers }, index) => {
        return (<div className="div">
    <div className="question">{question}</div>
    <img className="img" src = "../images/lus.jfif" />
    <div className="qList">
        <div className="answers1 answers">
            <p className="questions">Hide</p><span className="circle"></span>
        </div>
        <div className="answers2 answers">
            <p className="questions">Treet patient</p><span className="circle"></span>
        </div>
        <div className="answers3 answers">
            <p className="questions">Run</p><span className="circle"></span>
        </div>
        <div className="answers4 answers">
            <p className="questions">Other</p><span className="circle"></span>
        </div>
    </div>
  </div>);
    });

    return <div className="block2">{questionBody[0]}</div>
    
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