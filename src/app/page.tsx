import Button from "@/components/ui/Button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-green-500">
      <p className="font-bold">Hello Chat App</p>
      <Button>Hello</Button>
    </div>
  );
}
