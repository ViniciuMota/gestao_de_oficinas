"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ConfettiAnimation, SuccessToast } from "./magicui/confetti";
import { AuroraText } from "./magicui/aurora-text";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log("E-mail válido, enviando:", email);
      setIsSubmitted(true);
      // Futuramente, aqui você faria a chamada para a API
      // e talvez limparia o campo de e-mail:
      // setEmail("");
    } else {
      alert("Por favor, insira um formato de e-mail válido.");
    }
  };

  return (
    <section id="calltoaction" className="p-7">
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
              Prepare-se para transformar sua oficina com{" "}
              <AuroraText>10x mais eficiência!</AuroraText>
            </h2>
            <h4>
              {" "}
              cadastre-se e receba um desconto especial quando lançarmos!
            </h4>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col items-center gap-5"
            >
              <Input
                className="w-1/2"
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Input>
              <Button type="submit">Receber Desconto</Button>
            </form>
          </div>
        </div>
      </div>
      {isSubmitted && <ConfettiAnimation />}
      <SuccessToast show={isSubmitted} onClose={() => setIsSubmitted(false)} />
    </section>
  );
}
