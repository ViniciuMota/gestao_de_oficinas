import { LogoIcon } from "@/components/ui/logo";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="py-12 bg-[#171717]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="order-last flex items-center gap-3 md:order-first">
            <Link href="#" aria-label="go home">
              <LogoIcon />
            </Link>
            <span className="text-muted-foreground block text-center text-sm">
              © {new Date().getFullYear()} TheOficina, All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
