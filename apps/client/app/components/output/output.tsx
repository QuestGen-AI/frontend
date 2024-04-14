"use client";

import { Textarea } from "@repo/ui/components/ui/textarea";
import useClipboard from "../../hooks/useClipboard";
import { useData } from "../../hooks/useData";
export default function Output() {
  const { data, isLoading } = useData();
  const copyToClipboard = useClipboard("Topic");
  const handleCopy = () => {
    if (data && data !== "ERROR") {
      copyToClipboard(data);
    }
  };

  return (
    <Textarea
      className="min-h-[120px] max-h-[200px]"
      id="output"
      placeholder="OUTPUT WILL BE GENERATED IN HERE"
      disabled={isLoading}
      readOnly
      onClick={handleCopy}
      value={data ? data : ""}
    />
  );
}
