import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <InfinitySpin
        visible={true}
        width="200"
        color="black"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Spinner;
