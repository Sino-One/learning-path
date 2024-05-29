import React from "react";
import { Typography } from "@material-ui/core";

const Question = ({ text }) => {
  return (
    <Typography variant="h6" component="h3" className="mb-4">
      {text}
    </Typography>
  );
};

export default Question;
