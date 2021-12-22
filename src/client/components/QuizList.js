//@ts-check
import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import { Link } from "react-router-dom";
import environment from "../relay/enviroment";

const query = graphql`
  query QuizList_Query {
    Quizes{
      id
      name
      description
    }
  }
`;

const postAxios = function(id){

}

const renderQuery = ({ error, props }) => {
  if (!error && !props) {
    return <div className="loadingScreen">Loading...</div>;
  }
  const quizs = props.Quizes.map(
    (quiz) =>
      quiz && (
          <div key={quiz.id} className = "quizBox">
            <p className = "quizName">{quiz.name}</p>
            <p className = "quizDesc">{quiz.description}</p>
            {/* <Link to = {"/quiz/" + quiz.id}>Niggas</Link> */}
            <Link to = {"/quiz/" + quiz.id}>Niggas</Link>
          </div>
        )
  );
  return (
    <div className = "quizBody">
      {quizs}
    </div>
  );
};

function QuizList() {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={renderQuery}
    />
  );
}

export default QuizList;