import { useState } from "react";

export default function Grid() {
  const [displayGrid, setDisplayGrid] = useState(false);

  function handelClick() {
    setDisplayGrid((prev) => !prev);
  }

  return (
    <>
      <div className="c-grid__display o-grid">
        <div
          className={
            !displayGrid
              ? "c-grid__display-col"
              : "c-grid__display-col c-grid__display-col--1"
          }></div>
        <div
          className={
            !displayGrid
              ? "c-grid__display-col"
              : "c-grid__display-col c-grid__display-col--2"
          }></div>
        <div
          className={
            !displayGrid
              ? "c-grid__display-col"
              : "c-grid__display-col c-grid__display-col--3"
          }></div>
        <div
          className={
            !displayGrid
              ? "c-grid__display-col"
              : "c-grid__display-col c-grid__display-col--4"
          }></div>
        <div
          className={
            !displayGrid
              ? "c-grid__display-col"
              : "c-grid__display-col c-grid__display-col--5"
          }></div>
        <div
          className={
            !displayGrid
              ? "c-grid__display-col"
              : "c-grid__display-col c-grid__display-col--6"
          }></div>
        <div
          className={
            !displayGrid
              ? "c-grid__display-col"
              : "c-grid__display-col c-grid__display-col--7"
          }></div>
      </div>
      <div className="o-grid-icon" onClick={handelClick}>
        <div className="o-grid-icon--3"></div>
        <div className="o-grid-icon--2"></div>
        <div className="o-grid-icon--1"></div>
      </div>
    </>
  );
}
