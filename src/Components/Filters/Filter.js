import React from "react";
import Categories from "./Categories";
import Ratings from "./Ratings";
import Accordian from "./Accordian";
import Price from "./Price";

const Filter = () => {
  const filters = [
    {
      title: "Categories",
      component: <Categories />,
    },
    {
      title: "Ratings",
      component: <Ratings />,
    },
    {
      title: "Price",
      component: <Price />,
    },
  ];
  return (
    <div className="bg-white w-[350px]">
      <h1 className="p-3 text-2xl font-semibold border-b-2 "> Filters</h1>

      {filters.map((f) => {
        return <Accordian title={f.title} component={f.component} />;
      })}
    </div>
  );
};

export default Filter;
