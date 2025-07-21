import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  return (
    <section id="resources">
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            <h2 className="text-foreground  text-balance font-semibold w-full">
              <strong className="text-2xl font-extrabold">
                O que há no TheOficina?{" "}
              </strong>
              Tudo o que você precisa para organizar, atender e fazer sua
              oficina crescer.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden p-6 duration-100 hover:brightness-97">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Cadastro Inteligente de Clientes
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Adicione, edite, pesquise e visualize clientes com facilidade.
                Cadastre nome, telefone, endereço, e-mail e preferências de
                contato em poucos cliques.
              </p>
            </Card>

            <Card className="group overflow-hidden px-6 pt-6 duration-100 hover:brightness-97">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Cadastro Inteligente de Carros
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Registre veículos com marca, modelo, ano, placa e mais. Vincule
                a um cliente, edite dados e pesquise por placa ou modelo com
                rapidez.
              </p>
            </Card>
            <Card className="group overflow-hidden px-6 pt-6 duration-100 hover:brightness-97">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 12h11" />
                <path d="M10 18h11" />
                <path d="M10 6h11" />
                <path d="M4 10h2" />
                <path d="M4 6h1v4" />
                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
              </svg>
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Ordem de Serviço Inteligente
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Crie, edite e acompanhe ordens com cálculo automático, status
                atualizado e impressão fácil. Tudo vinculado ao cliente e
                veículo.
              </p>

              <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2"></div>
            </Card>
            <Card className="group overflow-hidden px-6 pt-6 duration-100 hover:brightness-97">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Histórico Inteligente do Carro
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Visualize todas as ordens de serviço por veículo, com detalhes
                completos e filtros por data, serviço ou peça utilizada.
              </p>

              <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2"></div>
            </Card>
            <Card className="group overflow-hidden px-6 pt-6 duration-100 hover:brightness-97">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 16 6 6" />
                <circle cx="16" cy="9" r="2.9" />
                <circle cx="6" cy="5" r="3" />
              </svg>
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Gestão Financeira Inteligente
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Calcule automaticamente o total das OSs, registre pagamentos e
                acompanhe tudo no histórico de ordens concluídas.
              </p>

              <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2"></div>
            </Card>
            <Card className="group overflow-hidden px-6 pt-6 duration-100 hover:brightness-97">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M22 8c0-2.3-.8-4.3-2-6" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                <path d="M4 2C2.8 3.7 2 5.7 2 8" />
              </svg>
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Notificações Inteligentes
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Mantenha seus clientes informados com alertas automáticos por
                WhatsApp, SMS ou e-mail sobre status da OS, previsão de entrega
                e finalização do serviço.
              </p>

              <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}