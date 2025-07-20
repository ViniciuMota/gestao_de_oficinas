"use client";

import { Input } from "@/components/ui/input";
import { ConfettiStars } from "./magicui/confetti";
import { AuroraText } from "./magicui/aurora-text";

export default function CallToAction() {
  return (
    <section id="calltoaction" className="p-7">
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
              Prepare-se para transformar sua oficina com <AuroraText>10x mais eficiência!</AuroraText>
            </h2>
            <h4>
              {" "}
              cadastre-se e receba um desconto especial quando lançarmos!
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setTimeout(() => {
                  console.log("enviando");
                }, 2000);
              }}
              className="flex justify-center flex-col items-center gap-5"
            >
              <Input className="w-1/2" placeholder="email@email.com"></Input>
              <div className="flex justify-center gap-3">
                  <ConfettiStars />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
