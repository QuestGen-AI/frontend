import { Label } from "@repo/ui/components/ui/label";
import TopicForm from "./components/form/form";
import Output from "./components/output/output";

export default async function Page() {
  return (
    <main className="w-full h-[calc(100vh_-_80px)] flex flex-col items-center justify-between gap-5">
      <div className="grid w-full items-center gap-3">
        <h1 className="text-6xl font-bold mb-6">
          WELCOME TO QGEN-AI TOPIC GENERATOR
        </h1>
        <TopicForm />
      </div>
      <div className="grid w-full gap-1.5">
        <Label className="text-2xl">GENERATED TOPIC:</Label>
        <p className="text-sm text-muted-foreground">
          You can copy generated paragraph by clicking it!
        </p>
        <Output />
      </div>
    </main>
  );
}
