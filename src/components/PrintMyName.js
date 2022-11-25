import { useState } from "react";

const PrintMyname = () => {
  const [name, setName] = useState("박광덕");
  return <p>{name}</p>;
};
export default PrintMyname;
