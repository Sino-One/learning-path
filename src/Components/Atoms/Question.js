// src/components/Question.js
import React from "react";
import { FormControl, FormLabel } from "@mui/material";

const Question = ({
  questionText,
  options,
  selectedOption,
  onOptionChange,
}) => (
  <FormControl component="fieldset" className="w-full mb-6">
    <FormLabel component="legend" className="mb-4 text-xl text-gray-900">
      {questionText}
    </FormLabel>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onOptionChange(option.id)}
          className={`p-4 border rounded-lg text-center transition-colors duration-200 ${
            selectedOption === option.id
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {option.option}
        </button>
      ))}
    </div>
  </FormControl>
);

export default Question;
