import React from "react";
import CustomLayout from "./wrapPageElement";

export const wrapPageElement = CustomLayout;

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://code.jquery.com/jquery-1.11.3.min.js" />,
    <script src="https://public.radio.co/playerapi/jquery.radiocoplayer.min.js" />,
  ]);
};
