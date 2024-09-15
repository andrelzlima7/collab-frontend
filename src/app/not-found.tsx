import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <p>Ops !!! Não há nada aqui</p>
      <Link href={"/"}>
        <Button>Dashboards</Button>
      </Link>
    </main>
  );
};

export default NotFound;
