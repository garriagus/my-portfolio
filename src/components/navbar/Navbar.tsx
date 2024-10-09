import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/navbar/MobileNav";
import SigninButton from "@/components/navbar/SigninButton";
import siteMetadata from "@/data/siteMetadata";
import navLinks from "@/data/navLinks";
import { ModeToggle } from "@/components/navbar/mode-toggle";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-1 w-full max-w-screen ">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-2">
              <Image
                src="/logo.png"
                alt="Agustín Garrido logo"
                className="dark:invert"
                width={50}
                height={50}
                priority
              />
            </div>
            {typeof siteMetadata.headerTitle === "string" ? (
              <div className="hidden h-4 text-lg font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-2 leading-5 sm:space-x-4">
          <SigninButton />
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
          <ModeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
