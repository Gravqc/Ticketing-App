import React from "react";

const getColor = (status) => {
  let color = "bg-slate-700";
  switch (status.toLowerCase()) {
    case "done":
      color = "bg-green-200";
      return color;
    case "committed":
      color = "bg-red-200";
      return color;
    case "in progress":
      color = "bg-yellow-200";
      return color;
  }
  return color;
};
const StatusDisplay = ({ status }) => {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs fond-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
