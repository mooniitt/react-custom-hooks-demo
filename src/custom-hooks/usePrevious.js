import * as React from "react";

const usePrevious = (val) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = val;
  });
  return ref.current;
};

export default () => {
  const [currentVal, setCurrentVal] = React.useState(0);
  const previousVal = usePrevious(currentVal);
  return (
    <div>
      <p>current : {currentVal}</p>
      <p>previous : {previousVal}</p>
      <button onClick={() => setCurrentVal(Math.floor(Math.random() * 100))}>
        随机数
      </button>
    </div>
  );
};
