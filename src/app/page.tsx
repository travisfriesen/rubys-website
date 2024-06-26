import Navbar from "@/components/navbar";
import { Card } from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Home() {
  return (
    <main>
      <div>
          <Header/>
          <h1>What we offer</h1>
          <div className="grid grid-cols-2 gap-4 m-4">
              <Card title="Golf" desc="test" link="/golf"></Card>
              <Card title="Mini Golf" desc="test"></Card>
              <Card title={"arcade"} desc={"test"}></Card>
              <Card title={"Hotdog Cart"} desc={"test"}></Card>
          </div>
      </div>
    </main>
  );
}
