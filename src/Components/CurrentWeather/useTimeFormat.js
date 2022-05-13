import { useEffect, useState } from "react";

function useTimeFormat(unixTime) {
  const [data] = useState(unixTime);
  const date = new Date(data * 1000);
  const [result, setResult] = useState({
    date: null,
    dayName: null,
    fullDate: null,
  });

  useEffect(() => {
    setResult({
      date: date,
      dayName: "Ponedeljak",
    });
  }, [unixTime]);

  return [result];
}

export default useTimeFormat;
