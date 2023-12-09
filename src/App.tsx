import React from "react";
import Accordian from "./components/Accordian";

const data = [
  {
    key: "first",
    value: {
      title: "How much is my case worth?",
      content: "Default Example of Law Firn NewsLetter",
    },
  },
  {
    key: "second",
    value: {
      title: "What should I do right after car accidect",
      content: "Default Example of Law Firn NewsLetter",
    },
  },
  {
    key: "third",
    value: {
      title: "How much is my case worth?",
      content: "Default Example of Law Firn NewsLetter",
    },
  },
  {
    key: "fourth",
    value: {
      title: "Do I need a personal injury report?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  },
];

function App() {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <Accordian
          data={data}
          labelColor={"bg-[black]"}
          accordianColor={"bg-[green]"}
          textColor={"text-[white]"}
        />
      </div>
    </div>
  );
}

export default App;
