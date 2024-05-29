import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

const Option = ({ text, onChange, checked, name }) => {
  return (
    <FormControlLabel
      control={
        <Radio
          checked={checked}
          onChange={onChange}
          value={text}
          name={name}
          color="primary"
        />
      }
      label={text}
      className="mb-2"
    />
  );
};

export default Option;
