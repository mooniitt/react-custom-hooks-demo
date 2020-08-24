import * as React from "react";

const useSetTimeout = (callback, delay) => {
  React.useEffect(() => {
    const id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  }, [callback, delay]);
};

export default () => {
  const [seconds, setSeconds] = React.useState(1);

  useSetTimeout(() => {
    setSeconds(2);
  }, 1000);

  return <p>{seconds}</p>;
};
