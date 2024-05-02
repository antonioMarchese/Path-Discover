import ElementsSelector from "@/components/elements/elementsSelector";
import Header from "@/components/header";
import Maze from "@/components/maze";

export default function Home() {
  return (
    <main className="w-full max-w-5xl flex flex-col items-center justify-start">
      <Header />
      <ElementsSelector />
      <Maze />
    </main>
  );
}
