import EcoSystem from "@/components/Ecosystem";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Ultimate from "@/components/Ultimate";




export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
      <Hero />
      <EcoSystem />
      <Ultimate />
    </main>
    </div>
  );
}
