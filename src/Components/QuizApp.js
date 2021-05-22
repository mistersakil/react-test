import React, { useEffect, useState } from "react";
import he from "he";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiMinetest } from "react-icons/si";
import Question from "./Question";
import Answer from "./Answer";

const QuizApp = () => {
  const [questions, questionsSet] = useState([]);
  const [loading, loadingSet] = useState(true);
  const [count, countSet] = useState(0);
  const [score, scoreSet] = useState(0);
  const [currentAnswer, currentAnswerSet] = useState("");

  useEffect(() => {
    const fetchApiCall = async () => {
      let data = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
      );
      data = await data.json();
      data = data.results;
      console.log(data);
      loadingSet(false);
      questionsSet(data);
    };
    if (questions.length === 0) {
      fetchApiCall();
    }
  }, []);

  let answers;
  if (questions.length > 0 && count < questions.length) {
    answers = [
      ...questions[count].incorrect_answers,
      questions[count].correct_answer,
    ]
      .sort(() => Math.random() - 0.5)
      .map((answer, index) => (
        <Answer
          answer={answer}
          key={index}
          index={index}
          onAnswerCheck={currentAnswerSetHandler}
        />
      ));
  }
  function answerCheckHandler(answer) {
    if (answer === questions[count].correct_answer) {
      scoreSet(score + 10);
    }
    console.log(he.decode(answer));
  }
  function currentAnswerSetHandler(answer) {
    currentAnswerSet(answer);
  }
  const nextQuestionHandler = () => {
    console.log(currentAnswer);
    countSet(count + 1);
  };
  return (
    <div className="container">
      <h1 className="text-center">
        <SiMinetest />
        Welcome to React Quiz App
      </h1>
      <hr />

      <div className="card text-center">
        {loading && <p className="text-center">Loading...</p>}
        {questions.length > 0 && (
          <>
            <Question question={questions[count].question} />
            {answers && <div className="col text-center">{answers}</div>}
            <button onClick={nextQuestionHandler}>Next</button>
          </>
        )}
        {/* {count === questions.length - 1 && (
          <p>{`Score is ${score} out of 100`}</p>
        )} */}
        {score && <p>{`Score is ${score} out of 100`}</p>}
      </div>
    </div>
  );
};

export default QuizApp;
