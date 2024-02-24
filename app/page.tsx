import EcoSystem from "@/components/Ecosystem";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Ultimate from "@/components/Ultimate";




export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <main className="overflow-hidden">
      <Hero />
      <EcoSystem />
      <Ultimate />
    </main>
    </div>
  );
}
