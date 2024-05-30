import React, { useEffect } from "react";
import QcmCard from "../Atoms/QcmCard";
import { useState } from "react";

export default function QcmList() {
  const [qcmList, setQcmList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/qcm/getAll")
      .then((response) => response.json())
      .then((data) => {
        setQcmList(data);
      });
  }, []);

  return (
    <>
      {qcmList.map((qcm, index) => {
        return <QcmCard questionnaire={qcm} key={index} />;
      })}
    </>
  );
}
