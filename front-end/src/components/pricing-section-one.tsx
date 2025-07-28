import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { AuroraText } from "./magicui/aurora-text";

export default function Pricing() {
  return (
    <div className="bg-muted py-2 md:py-4">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl w-full">
            🚀 <AuroraText>Turbine</AuroraText> sua oficina 💰
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 text-balance text-lg">
            Organize sua rotina, ganhe tempo e ofereça um atendimento mais profissional 🛠️📲
          </p>
        </div>
        <div className="mt-2 md:mt-4">
          <Card className="relative">
            <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <Logo />
                <p className="mt-2 text-lg">
                  Para empresas de pequeno e médio porte
                </p>
                <span className="mb-6 mt-12 inline-block text-6xl font-bold p-1">
                  <span className="text-4xl">R$</span>12/mês
                </span>

                <div className="flex justify-center">
                  <Button asChild size="lg">
                    <Link href="#">Em breve...</Link>
                  </Button>
                </div>

                <p className="text-muted-foreground mt-12 text-sm">
                  Inclui suporte prioritário, lembretes automáticos, relatórios com exportação, histórico de serviços, agendamento integrado e um painel online para o cliente acompanhar tudo.
                </p>
              </div>
              <div className="relative">
                <ul role="list" className="space-y-4">
                  {[
                    "📞 Suporte Humano Prioritário: Atendimento rápido e personalizado.",
                    "🔔 Notificações Personalizadas: Lembretes automáticos para clientes.",
                    "📊 Relatórios Profissionais: Dados no plano gratuito e exportação no plano pago.",
                    "🛠️ Histórico Completo de Serviços: Registros organizados e acessíveis.",
                    "📅 Agendamento Online Simplificado: Integração ao calendário da oficina.",
                    "📱 Painel do Cliente Online: Portal exclusivo para acompanhar serviços.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check
                        className="text-primary size-3"
                        strokeWidth={3.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
