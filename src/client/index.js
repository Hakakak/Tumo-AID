//@ts-check
import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import QuizList from "./components/QuizList";
import SideBar from "./components/SideBar";
import MainBody from "./components/QuestionBody";
import NavigationBar from "./components/NavigationBar";

const Root = () => {
  return (
    <div className="container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/quiz">
            <section className = "section">
              <SideBar />
              <MainBody />
            </section>
          </Route>
          <Route path="/">
              <QuizList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));