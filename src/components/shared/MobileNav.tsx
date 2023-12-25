import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavItems from "./NavItems";

function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src="/images/logo.svg" alt="logo" width={128} height={38} />
          {/* <Separator className="border border-gray-50" /> */}
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
