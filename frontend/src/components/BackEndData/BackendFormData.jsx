import React from "react";
import { BusFormData } from "./BusFormData";
import { MoviesFormData } from "./MoviesFormData";
import { TrainFormData } from "./TrainFormData";

export const BackendFormData = () => {
  return (
    <>
      <BusFormData />
      <br />
      <TrainFormData />
      <br />
      <MoviesFormData />
    </>
  );
};
