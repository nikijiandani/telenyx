import { useState, useEffect } from "react";

export default function useFetch(fetchData) {
  const [data, setData] = useState([]);
  const url =
    "https://dialogflow.googleapis.com/v2/projects/telenyx-bganmh/agent/sessions/b5a0be4b-2502-a7ae-693a-2a68585f7593:detectIntent";
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer ya29.c.ElqLB4Ul_uEZZoAQHN_Jb44ZylBYVvTet7-pRg5YniBKl6Xcs9VFmz38W_DIv1nUdx57V5X70VLnzSkC2BX6xBeOp_G4u--LYlLe59gq4c7ebZojVoxG-pVv6Xs"
      },
      body: fetchData
    })
      .then(function(response) {
        return response.json(); // pass the data as promise to next then block
      })
      .then(function(data) {
        setData(data);
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  }, []);
  return data;
}
