import { Card } from "@/components/card";
import { Header } from "@/components/header";
export default function Home() {
  return (
    <main>
      <div>
          <Header src="/golf.jpg" alt="people playing golf"/>
          <div className="bg-r-green pl-6 pr-6 text-center m-auto pt-20 pb-20">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1 className="text-4xl pb-5">Ruby's Paradise is family owned and operated</h1>
              <h2 className="text-2xl pb-2">Named after Late Aunt Ruby to honour her and thank for for being the biggest supporter through life.</h2>
              <p>After opening in September of 2022, we slowly moved from being open weekends, to having weekday hours. This year marked the start of a bunch of new things for us including running Boardwalk Station Arcade and Coffee Shop, and adding Mini Golf to our roster of activities.</p>

          </div>
          <div className="desktop-only grid grid-cols-2 gap-x-16 gap-y-8 mr-[16vw] ml-[16vw] mb-16 mt-8">
              <Card title="Driving Range" desc="Come on down to our Driving Range, where you can perfect your swing against a backdrop of up to 280 yards of range. Whether you're a seasoned golfer or a beginner looking to improve, our range offers bundles of 26 for $6 or 52 balls for $12 or 104 balls for $22. Don't worry about bringing your clubs – we provide club rentals at $5 per club or $20 for a complete set with a valid driver's license. Located in Winnipeg Beach, Manitoba, our driving range is the ideal spot to practice your game and enjoy the fresh air." link="/golf"></Card>
              <Card title="Mini Golf" desc="Exciting news! Mini golf is coming soon to Winnipeg Beach at Boardwalk Station and the driving range, adding a fun and scenic activity to your lakeside adventures. Get ready to putt your way through our engaging course, perfect for family outings, date nights, or friendly competitions with friends. Stay tuned for updates on our grand opening, where you can enjoy a round of mini golf amidst the beautiful beach surroundings. " link="/minigolf"></Card>
              <Card title="Boardwalk Station" desc="Welcome to our newly reopened Boardwalk Station Arcade and coffee shop in Winnipeg Beach, where nostalgia meets modern fun! Step into our inviting space to enjoy Mas Coffee Co. canned cold brew and a curated collection of arcade games that span the classics you grew up with to the latest favorites. Whether you're reliving childhood memories or discovering new thrills, our atmosphere blends retro charm with contemporary excitement. Join us for a unique experience where coffee and gaming come together in a place designed for both relaxation and play." link="/arcade"></Card>
              <Card title="Hotdog Cart" desc="Join us at the Winnipeg Beach Farmers Market every Friday through Sunday for a savory treat at our hotdog cart! We proudly serve up a variety of options including classic hotdogs, flavorful smokies, juicy burgers, and delicious plant-based burgers. Enjoy your favorite fare in the vibrant atmosphere of the market—it's the perfect weekend treat at Winnipeg Beach!" link="/hotdog"></Card>
          </div>
          <div className="mobile-only grid grid-cols-1 gap-x-16 gap-y-8 mr-[8vw] ml-[8vw] mb-16 mt-8">
              <Card title="Driving Range" desc="Come on down to our Driving Range, where you can perfect your swing against a backdrop of up to 280 yards of range. Whether you're a seasoned golfer or a beginner looking to improve, our range offers bundles of 26 for $6 or 52 balls for $12 or 104 balls for $22. Don't worry about bringing your clubs – we provide club rentals at $5 per club or $20 for a complete set with a valid driver's license. Located in Winnipeg Beach, Manitoba, our driving range is the ideal spot to practice your game and enjoy the fresh air." link="/golf"></Card>
              <Card title="Mini Golf" desc="Exciting news! Mini golf is coming soon to Winnipeg Beach at Boardwalk Station and the driving range, adding a fun and scenic activity to your lakeside adventures. Get ready to putt your way through our engaging course, perfect for family outings, date nights, or friendly competitions with friends. Stay tuned for updates on our grand opening, where you can enjoy a round of mini golf amidst the beautiful beach surroundings. " link="/minigolf"></Card>
              <Card title="Boardwalk Station" desc="Welcome to our newly reopened Boardwalk Station Arcade and coffee shop in Winnipeg Beach, where nostalgia meets modern fun! Step into our inviting space to enjoy Mas Coffee Co. canned cold brew and a curated collection of arcade games that span the classics you grew up with to the latest favorites. Whether you're reliving childhood memories or discovering new thrills, our atmosphere blends retro charm with contemporary excitement. Join us for a unique experience where coffee and gaming come together in a place designed for both relaxation and play." link="/arcade"></Card>
              <Card title="Hotdog Cart" desc="Join us at the Winnipeg Beach Farmers Market every Friday through Sunday for a savory treat at our hotdog cart! We proudly serve up a variety of options including classic hotdogs, flavorful smokies, juicy burgers, and delicious plant-based burgers. Enjoy your favorite fare in the vibrant atmosphere of the market—it's the perfect weekend treat at Winnipeg Beach!" link="/hotdog"></Card>
          </div>
      </div>
    </main>
  );
}
