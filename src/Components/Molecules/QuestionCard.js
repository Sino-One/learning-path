import React, { useState } from "react";
import { Paper, RadioGroup } from "@material-ui/core";
import Option from "../Atoms/Option";
import Question from "../Atoms/Question";

const QuestionCard = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Paper className="p-6 mb-4">
      <Question text={question} />
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <Option
            key={index}
            text={option}
            name={question}
            onChange={handleOptionChange}
            checked={selectedOption === option}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
};

export default QuestionCard;
