import React from "react";
import GoogleAnalytics from "./GoogleAnalytics";
import MicrosoftClarity from "./MicrosoftClarity";
import BaiDuAnalytics from "@/components/metrics/BaiDuAnalytics";
import { Analytics } from "@vercel/analytics/react";

export default function Metrics() {
  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <BaiDuAnalytics />
      <Analytics />
    </>
  );
}
