import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-green-500">
      <p className="font-bold">Hello Chat App</p>
    </div>
  );
}
