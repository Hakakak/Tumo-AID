
import React, { useCallback } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { useParams, Link } from "react-router-dom";
import environment from "../relay/enviroment";
import QuizBody from "./QuizBody";
import SideBar from "./SideBar";

const query = graphql`
  query QuestionBody_Query($id: ID!) {
    Quiz(id: $id){
        name
        questions{
          id
          question
          answers{
            answer
          }
        }
      }
    }
`;

const renderQuery = ({ error, props }) => {
  if (!error && !props) {
    return <div>Loading...</div>;
  }

  const { Quiz } = props;
  console.log(Quiz);
  console.log(props);
  return (
    <section className = "section">
      <SideBar quiz = {Quiz} />
      <QuizBody questions = {Quiz.questions} />
    </section>
  );
};

function QuestionBody() {
  const { id } = useParams();
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ id }}
      render={renderQuery}
    />
  );
}

export default QuestionBody;