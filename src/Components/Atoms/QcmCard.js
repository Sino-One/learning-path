import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QcmCard({ questionnaire, userResponses }) {
  const navigate = useNavigate();
  const [qcmResponses, setQcmResponses] = useState(0);

  function goToQcm() {
    navigate(`qcm/${questionnaire.form_description}`, {
      state: { questionnaire, qcmResponses },
    });
  }

  useEffect(() => {
    let responseCount = 0;
    userResponses.forEach((userResponse) => {
      if (userResponse.questionnaire_id === questionnaire.id) {
        responseCount += 1;
      }
    });
    setQcmResponses(responseCount);
  }, [userResponses, questionnaire.id]);

  return (
    <>
      <div className="m-10">
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => goToQcm(questionnaire.form_description)}
        >
          {/* <img
            className="w-full"
            src="/img/card-top.jpg"
            alt="Sunset in the mountains"
          /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {questionnaire.form_description}
            </div>
            <p className="text-gray-700 text-base">
              {questionnaire.total_points} Questions
            </p>
            <Divider className="my-4" />
            <p className="text-gray-700 text-base">
              {qcmResponses} Réponses répondues
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{
                    width: `${
                      (qcmResponses / questionnaire.total_points) * 100
                    }%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
}
