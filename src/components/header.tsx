import { Logo } from "@/icons/logo";
import { Container } from "./container";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <Container className="flex h-[var(--nav-height)] border-white-a80 border-b">
        <Link href="/" className="flex items-center text-md cursor-pointer">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-2" /> Linear
        </Link>

        <nav className="h-full">
          <ul className="flex h-full items-center [&_li]:ml-6 [&_a]:text-sm [&_a]:cursor-pointer">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center h-full">
          <Link className="text-sm cursor-pointer mr-6" href="/login">
            Login
          </Link>
          <Link className="text-sm cursor-pointer" href="/signup">
            Signup
          </Link>
        </div>
      </Container>
    </header>
  );
};

const navItems = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Method",
    href: "/method",
  },
  {
    label: "Customers",
    href: "/customers",
  },
  {
    label: "Changelog",
    href: "/changelog",
  },
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Company",
    href: "/company",
  },
];
