
import { Flowbite } from "flowbite-react";
import { Header } from "./components/Header";
import { MainBody } from "./components/MainBody";
export default function Home() {
  return (
   <>
   <Flowbite >
    <main className="relative">

      <Header />
      <MainBody />

    </main>
   </Flowbite>
   </> 
  );
}
