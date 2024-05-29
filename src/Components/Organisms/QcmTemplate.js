import React from "react";
import QuestionCard from "./QuestionCard";

const QcmTemplate = ({ questions }) => {
  return (
    <div className="p-4">
      {questions.map((qcm, index) => (
        <QuestionCard
          key={index}
          question={qcm.question}
          options={qcm.options}
        />
      ))}
    </div>
  );
};

export default QcmTemplate;
