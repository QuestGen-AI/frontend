"use client";

import { Textarea } from "@repo/ui/components/ui/textarea";
import useClipboard from "../../hooks/useClipboard";
import { useData } from "../../hooks/useData";
export default function Passage() {
  const { data, isLoading } = useData();
  const copyToClipboard = useClipboard("Passage");
  const handleCopy = () => {
    if (data?.passage) {
      copyToClipboard(data.passage);
    }
  };
  return (
    <Textarea
      className="min-h-[80px] max-h-[120px]"
      id="passage"
      placeholder="PASSAGE WILL BE GENERATED IN HERE"
      disabled={isLoading}
      readOnly
      onClick={handleCopy}
      value={data ? data.passage : ""}
    />
  );
}
