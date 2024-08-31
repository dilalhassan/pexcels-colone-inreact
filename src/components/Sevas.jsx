import React from "react";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

const Sevas = ({ saved, loader }) => {
  return (
    <>
      <div className="container-fluid text-center" id="top">
        {loader | (saved.length === 0) ? (
          <loader />
        ) : (
          <>
            <div className="flex">
              {saved.map((image) => (
                <div key={image.id} className="items">
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {saved.length != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back to top
          </a>
        )}
      </div>
    </>
  );
};

export default Sevas;
