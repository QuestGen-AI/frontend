"use client";

import { Input } from "@repo/ui/components/ui/input";
import useClipboard from "../../hooks/useClipboard";
import { useData } from "../../hooks/useData";
export default function Topic() {
  const { data, isLoading } = useData();
  const copyToClipboard = useClipboard("Topic");
  const handleCopy = () => {
    if (data?.topic && data?.topic !== "ERROR") {
      copyToClipboard(data.topic);
    }
  };

  return (
    <Input
      id="result"
      placeholder="TOPIC WILL BE GENERATED IN HERE"
      disabled={isLoading}
      readOnly
      value={data ? data.topic : ""}
      onClick={handleCopy}
    />
  );
}
