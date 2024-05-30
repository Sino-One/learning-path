// src/components/Questionnaire.js
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Question from "../Atoms/Question";
import { useLocation, useParams } from "react-router-dom";

const QcmTemplate = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [questions, setQuestions] = useState([]);

  const { formDescription } = useParams();
  const location = useLocation();
  const { questionnaire } = location.state;

  const handleOptionChange = (questionIndex) => (optionId) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: optionId,
    });
  };

  const fetchQuestions = () => {
    return fetch(`http://localhost:8080/api/qcm/${questionnaire.id}/questions`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    console.log("Selected Options: ", selectedOptions);
  };

  return (
    <div className="m-20">
      <Question
        questionText={questions[currentQuestionIndex]?.question || ""}
        options={questions[currentQuestionIndex]?.option || []}
        selectedOption={selectedOptions[currentQuestionIndex] || ""}
        onOptionChange={handleOptionChange(currentQuestionIndex)}
      />
      <div className="flex justify-between mt-4">
        {currentQuestionIndex > 0 && (
          <Button variant="contained" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default QcmTemplate;
