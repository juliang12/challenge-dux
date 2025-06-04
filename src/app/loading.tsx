"use client";
import { ProgressBar } from "primereact/progressbar";

const Loading = () => {
  return (
    <div className="card">
      <ProgressBar mode="indeterminate" style={{ height: "6px" }}></ProgressBar>
    </div>
  );
};

export default Loading;
