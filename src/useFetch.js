import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name==='AbortError'){
            console.log("fetch aborted");
          }
          else{
            setError(err.message);
            setIsPending(false);
          }        
        });
    },0);
    return () => abortCont.abort();
  }, [url]);
  return { isPending, data, error };
};

export default useFetch;
