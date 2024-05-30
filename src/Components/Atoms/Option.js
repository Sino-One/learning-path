// src/components/Option.js
import React from "react";
import { Radio, FormControlLabel } from "@mui/material";

const Option = ({ optionText, value, checked, onChange }) => (
  <FormControlLabel
    value={value}
    control={<Radio checked={checked} onChange={onChange} />}
    label={optionText}
    className="text-gray-800"
  />
);

export default Option;
