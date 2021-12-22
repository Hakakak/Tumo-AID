//@ts-check
import React from "react";
import { Link } from "react-router-dom";


function SideBar(props) {

    let uniqueQuestions = props.quiz.questions.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.id === value.id
        ))
    )

    const questionItems = uniqueQuestions.map(({ id }, index) => {
      return (
        <li className="questionBullets" key={id}>
            <div className="questionBullets_block">
                    <div className="number">
                        {++index}
                    </div>
                    <p>Question</p>
                </div>
            </li>
      );
    });
    return <ul className="block1">{questionItems}</ul>;
  }

export default SideBar;

{/* <div className="block1">
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
        </div> */}