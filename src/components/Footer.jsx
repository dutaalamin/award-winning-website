import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const menuLinks = [
  { label: "Game", href: "#game" },
  { label: "Features", href: "#features" },
  { label: "Story", href: "#story" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
];

const exploreLinks = [
  { label: "Heroes", href: "#features" },
  { label: "Maps", href: "#features" },
  { label: "Synergies", href: "#features" },
  { label: "Media", href: "#features" },
];

const followLinks = [
  { label: "Discord", href: "https://discord.com" },
  { label: "X", href: "https://twitter.com" },
  { label: "Youtube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

const resourceLinks = [{ label: "Media Kit", href: "#" }];

const Section = ({ title, items }) => (
  <div>
    <p className="mb-4 text-xs font-medium uppercase tracking-widest opacity-70">
      {title}
    </p>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i}>
          <a
            href={item.href}
            className="text-lg transition-colors hover:text-neutral-800"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-screen bg-blue-50 text-black">
      <div className="container mx-auto px-6 py-12 md:py-16">


        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <Section title="Menu" items={menuLinks} />
          <Section title="Explore" items={exploreLinks} />
          <Section title="Follow Us" items={followLinks} />
          <Section title="Resources" items={resourceLinks} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm opacity-80 md:flex-row">
          <p>© Duta Alamin 2025. All rights reserved.</p>
          <a href="#privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
