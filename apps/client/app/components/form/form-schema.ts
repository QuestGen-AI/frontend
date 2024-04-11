"use client";

import { z } from "zod";

export const formSchema = z.object({
  keyword: z.string().min(2).max(50),
});
