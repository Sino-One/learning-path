// src/components/Questionnaire.js
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import Question from "../Atoms/Question";
import { useLocation, useParams } from "react-router-dom";
import * as Api from "../../Utils/Api";
import { UserContext } from "../../store/UserReducer";
import { toast } from "react-toastify";

const QcmTemplate = () => {
  const { formDescription } = useParams();
  const location = useLocation();
  const { questionnaire, qcmResponses } = location.state;

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(qcmResponses);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [questions, setQuestions] = useState([]);
  const { user } = useContext(UserContext);

  const handleOptionChange = (questionIndex) => (optionId) => {
    if (selectedOptions[questionIndex] === optionId) {
      setSelectedOptions({
        ...selectedOptions,
        [questionIndex]: 0,
      });
      return;
    }
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
    if (selectedOptions[currentQuestionIndex]) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      toast.info("Veuillez choisir une réponse");
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    const userResponses = Object.entries(selectedOptions).map(
      ([questionIndex, selectedOptionId]) => ({
        userId: user.id,
        questionnaire_id: questions[0].questionnaire_id,
        question_id: questions[questionIndex].id,
        selectedOption_id: selectedOptionId,
      })
    );

    Api.post("api/user-responses/save", userResponses)
      .then((response) => {
        console.log("Réponses sauvegardées avec succès : ", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la sauvegarde des réponses : ", error);
      });
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
        {currentQuestionIndex < questions.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className="w-full"
          >
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
