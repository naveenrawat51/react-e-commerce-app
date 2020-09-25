import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner-styles";

const SpinnerHoc = (WrappedComponent) => ({ isLoading, ...otherPropps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherPropps} />
  );
};

export default SpinnerHoc;
