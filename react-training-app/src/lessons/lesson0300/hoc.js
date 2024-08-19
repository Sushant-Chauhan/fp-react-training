import { useState, useEffect } from "react";

const withFetchData = (Element, url) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
      const makeApiCall = async () => {
        setIsLoading(true);
        try {
          let res = await fetch(url);
          if (res.ok) {
            res = await res.json();
            setData(res);
          } else {
            setError(true);
          }
        } catch (e) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };

      makeApiCall();
    }, []);

    if (isLoading) {
      return <div>....Loading</div>;
    }

    if (error) {
      return <div>Something went wrong!...</div>;
    }

    return <Element data={data} {...props} />;
  };
};

export default withFetchData;
