"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useData } from "../../hooks/useData";
import { generate } from "./action";
import { formSchema } from "./form-schema";
export default function TopicForm() {
  const { setData, setIsLoading, isLoading } = useData();
  // form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: "",
    },
  });

  async function onSubmit(inputs: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const { data } = await generate(inputs.keyword);
    setIsLoading(false);

    if (data) {
      setData(data);
    } else {
      setData({ topic: "ERROR", passage: "ERROR OCCURED. PLEASE RETRY." });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="keyword"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="text-2xl">BROAD TOPIC:</FormLabel>
              <FormControl>
                <Input placeholder="Information System" {...field} />
              </FormControl>
              <FormDescription>
                The wider the topic, the more random the topic will be.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          GENERATE
        </Button>
      </form>
    </Form>
  );
}
