import React, { useEffect } from "react";
import QcmCard from "../Atoms/QcmCard";
import { useState } from "react";
import * as Api from "../../Utils/Api";
import { useContext } from "react";
import { UserContext } from "../../store/UserReducer";

export default function QcmList() {
  const [qcmList, setQcmList] = useState([]);
  const [userResponses, setUserResponses] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    Api.get("api/qcm/getAll")
      .then((response) => response.data)
      .then((data) => {
        setQcmList(data);
      });

    Api.get(`api/user-responses/user-responses?userId=${user.id}`).then(
      (response) => {
        console.log("Réponses de l'utilisateur : ", response.data);
        setUserResponses(response.data);
      }
    );
  }, []);

  return (
    <>
      {qcmList.map((qcm, index) => {
        return (
          <QcmCard
            questionnaire={qcm}
            userResponses={userResponses}
            key={index}
          />
        );
      })}
    </>
  );
}
