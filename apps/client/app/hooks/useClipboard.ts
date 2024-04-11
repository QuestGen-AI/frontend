"use client";
import { useCallback } from "react";
import { useToast } from "../../../../packages/ui/src/components/ui/use-toast";

const useClipboard = (type: string) => {
  const { toast } = useToast();
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: `${type} is copyed`,
        description: "You can paste generated paragraph from now on.",
      });
    } catch (e) {
      toast({ title: "COPY FAILED", description: "복사에 실패했습니다." });
    }
  }, []);

  return copyToClipboard;
};

export default useClipboard;
