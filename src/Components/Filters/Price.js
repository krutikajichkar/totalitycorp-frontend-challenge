import React,{useState} from "react";

const Price = () => {
    const [range, setRange] = useState(0)
  return (
    <div className="px-4 py-2">
      <div className="w-[300px]">
        <input type="range" className="w-full" value={range} onChange={(e) => setRange(e.target.value)} />
        <div className="w-full flex justify-between">
            <span>100</span>
            <span>10000</span>
        </div>
        <h1 className="mt-3 text-xl">Selected Range : ${range*100}</h1>
      </div>
    </div>
  );
};

export default Price;
