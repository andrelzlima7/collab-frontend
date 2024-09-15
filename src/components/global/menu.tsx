import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Group,
  LayoutDashboard,
  MenuIcon,
  ShoppingBasket,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="text-primary-foreground focus:text-primary cursor-pointer">
          <MenuIcon />
        </MenubarTrigger>
        <MenubarContent className="text-primary font-bold">
          <MenubarItem>
            <Link href="/" className="flex items-center">
              <MenubarShortcut>
                <LayoutDashboard />
              </MenubarShortcut>
              Dashboards{" "}
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link href="produtos" className="flex items-center">
              <MenubarShortcut>
                <ShoppingBasket />
              </MenubarShortcut>
              Produtos{" "}
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <MenubarShortcut>
              <Group />
            </MenubarShortcut>
            Grupos{" "}
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <MenubarShortcut>
              <UserCheck />
            </MenubarShortcut>
            Usuários{" "}
          </MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Menu;
