import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import { SearchBar } from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <div>Youtube</div>
        <SearchBar />
        <div>Logout</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 p-4">
        {list.map((item) => (
          <VideoCard />
        ))}
      </div>
    </>
  );
}
