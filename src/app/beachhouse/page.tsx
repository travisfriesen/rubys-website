import { PageBanner } from "@/components/PageBanner";
import { Spacer } from "@/components/Spacer";

export default function Home() {
  return (
    <main>
      <div>
        <PageBanner
          title="The Beach House - For Rent"
          subtitle="Call for details and inquiries"
          bgColour="bg-r-blue"
        />
        <Spacer />
        <Spacer />
      </div>
    </main>
  );
}
