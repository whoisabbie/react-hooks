import React, { useContext } from "react";
import PeopleContext from "../context/peopleContext";

const PeopleCount = () => {
  const context = useContext(PeopleContext);
  return <div className="text-center mt-4">{context.people.length}</div>;
};

export default PeopleCount;
