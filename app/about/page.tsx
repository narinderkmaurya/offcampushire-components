import Header from "@/components/Header/Header";
import Last from "@/components/Last";
import Moreover from "@/components/Moreover";
import Navbar from "@/components/Navbar/Navbar";
import New from "@/components/New";
import Problem from "@/components/Problem";

export default function Home() {
    return (
        <main className="overflow-x-hidden">

            <Header />
            <Problem />
            <div className="">
                <New />

            </div>
            <div>
                <Moreover />
            </div>
            <Last />
        </main>
    );
}
