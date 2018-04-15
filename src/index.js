import React from "react";
import { render } from "react-dom";
import boot from "./boot";
import App from "./app";

const { appTarget, isInSidebar } = boot();

if (appTarget) {
  render(<App fullScreen={!isInSidebar} />, appTarget);
}
