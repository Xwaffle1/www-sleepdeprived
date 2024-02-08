"use client";
import { useEffect } from "react";
import { sendEvent } from "./Posthog";

export default function ClientPostHog() {
  useEffect(() => {
    sendEvent("Page View");
  }, []);

  return <></>;
}
