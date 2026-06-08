import logger from "@/helpers/logger";
import { useEffect, useState } from "react";


const apiRequest = async (
  url,
  method = "GET",
  headers = {},
  payload = null
) => {
  try {
    if (!url) {
      throw new Error("url is required")
    }
    const response = await fetch(url, {
      method: method || "GET",
      headers: headers
        ? headers
        : {
            "Content-Type": "application/json",
          },
      payload: payload ? JSON.stringify(payload) : null,
    });

    logger.info(`[${apiRequest.name}] [${response.status}] [${method}] API request successfully.`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    logger.error(`[${apiRequest.name}] ${error}`);
  }
};

// useUserData.js (Abstraction)
// HOC not care about low level
// not go to detail of each low level
// abstract to high level
export const useApiRequest = (innerFunction, url, method, headers, payload) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    innerFunction(url, method, headers, payload).then(setUser);
  }, [url]);

  return user;
};

const Quotes = () => {
  // API source: https://freeapi.hashnode.space/api-guide/apireference/getJokes

  let quotes = useApiRequest(
    apiRequest,
    "https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human"
  );
  quotes = quotes?.data?.data;



  return (
    <>
        <h2>Quotes</h2>
        {quotes &&
          quotes.map((quote, idx) => (
            <p key={idx}>{quote?.content ?? "No content"}</p>
          ))}
    </>
  );
};

export const Joke = () => {
  let jokes = useApiRequest(
    apiRequest,
    "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1"
  );
  jokes = jokes?.data?.data;
  return (
    <>
        <h2> Jokes</h2>
        {jokes &&
          jokes.map((joke, idx) => (
            <p key={idx}>{joke?.content ?? "No content"}</p>
          ))}
    </>
  );
}

export default Quotes;
