import { useState, useEffect } from "react";

export default function useFetch() {
  const [data, setData] = useState([]);
  const url =
    "https://dialogflow.googleapis.com/v2/projects/telenyx-bganmh/agent/sessions/b5a0be4b-2502-a7ae-693a-2a68585f7593:detectIntent";
  let fetchData =
    '{"queryInput":{"text":{"text":"Hello!","languageCode":"en"}},"queryParams":{"timeZone":"America/Toronto"}}';
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.AUTH_KEY
      },
      body: fetchData
    })
      .then(function(response) {
        return response.text(); // pass the data as promise to next then block
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
