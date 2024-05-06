import ElementsSelector from "@/components/elements/elementsSelector";
import Header from "@/components/header/index";
import Grid from "@/components/maze/grid";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-start">
      <Header />
      <ElementsSelector />
      <Grid />
    </main>
  );
}
