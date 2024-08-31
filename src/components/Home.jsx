import React from "react";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ Images, loader, setSaved, saved }) => {
  const saveImage = (img) => {
    let flag = true;

    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          //react  tostrefay
          // console.log("image is alrady exist");
          toast.info("image is alrady saved!", {
            position: "top-right",
            autoClose: 1400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      // console.log("image is saved");
      toast.success("image is saved!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container-fluid text-center" id="top">
        {loader ? (
          <loader />
        ) : (
          <>
            <div className="flex">
              {Images.map((image) => (
                <div
                  key={image.id}
                  className="items"
                  onClick={() => saveImage(image)}
                >
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {Images.length != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back to top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
