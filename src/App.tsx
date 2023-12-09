import React, { useState } from "react";
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
  const [size, setSize] = useState<string>("w-[90%]");
  return (
    <div>
      <select
        name="size"
        id="size"
        value={size}
        onChange={(e) => setSize(e.currentTarget.value)}
      >
        <option value="w-[10%]">10</option>
        <option value="w-[30%]">30</option>
        <option value="w-[50%]">50</option>
        <option value="w-[70%]">70</option>
        <option value="w-[90%]">90</option>
      </select>
      <div className={`${size}`}>
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
