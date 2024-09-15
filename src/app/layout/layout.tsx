import Avatar from "@/components/global/avatar";
import Menu from "@/components/global/menu";
import { Button } from "@/components/ui/button";
import { LogOut, Waypoints } from "lucide-react";

interface PropsLayout {
  children: React.ReactNode;
  titlePage: string;
}

const Layout = ({ children, titlePage }: PropsLayout) => {
  return (
    <>
      <header className="flex justify-between bg-primary px-12 py-2">
        <div className="flex items-center gap-16">
          <Menu />
          <h2 className="flex items-center gap-2 text-xl font-bold text-primary-foreground">
            <Waypoints />
            {titlePage}
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <Avatar />
          <Button
            variant={"link"}
            className="text-primary-foreground hover:text-primary-foreground/90"
          >
            <LogOut />
          </Button>
        </div>
      </header>

      {children}
    </>
  );
};

export default Layout;
