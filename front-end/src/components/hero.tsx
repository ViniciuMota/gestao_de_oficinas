import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { ChevronRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function HeroSection() {
  return (
    <div>
      <HeroHeader />
      <main className="overflow-hidden h-[100dvh]">
        <section className="bg-linear-to-b to-muted from-background">
          <div className="relative py-20 md:py-26">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="md:w-1/2">
                <div>
                  <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">
                    Gestão de oficina sem <AuroraText>complicação</AuroraText>
                  </h1>
                  <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
                    Tudo o que você precisa, em um só lugar. Agendamentos,
                    ordens de serviço, estoque,<br></br> financeiro e muito mais tudo
                    dentro do seu app<br></br> de oficina.
                  </p>

                  <div className="flex items-center gap-3">
                    <Button asChild size="lg" className="pr-4.5">
                      <Link href="#resources">
                        <span className="text-nowrap">Começar</span>
                        <ChevronRight className="opacity-50" />
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="outline"
                      className="pl-5"
                    >
                      <Link href="#link">
                        <CirclePlay className="fill-primary/25 stroke-primary" />
                        <span className="text-nowrap">Assista ao vídeo (Em breve...)</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-muted-foreground">
                    Feito com ❤️ na primeira maratona da:
                  </p>
                  <div className="mt-3 grid max-w-sm grid-cols-3 gap-6 ">
                    <div className="flex">
                      <div className="flex gap-3 p-2 bg-gray-300 rounded-2xl">
                        <span className="text-left text-dracula-foreground text-3xl font-normal transition-all duration-150">
                          ⚗️
                        </span>
                        <h1 className="text-left text-dracula-foreground text-3xl font-bold transition-all duration-150">
                          BeroLab
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
              <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                  <Image
                    src="/imglading.jpg"
                    alt="app screen"
                    width="2880"
                    height="1842"
                    className="object-top-left size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
