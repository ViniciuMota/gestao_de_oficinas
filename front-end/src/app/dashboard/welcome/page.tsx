import { AuroraText } from "@/components/magicui/aurora-text";

import { AppSidebar } from "@/components/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Welcome() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Bem vindo🌟🎉</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Bem vindo a plataforma</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="p-6 md:p-10 space-y-8">
          <Card className="">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold flex justify-center items-center">
                <p>
                  🎉🚀 Bem-vindo à nossa <AuroraText>plataforma</AuroraText>{" "}
                  🔧📊
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p>
                Você acaba de entrar em um novo nível de gestão!<br></br>
                 Com a plataforma, sua oficina ganha velocidade⚡, organização 🗂️ e
                um atendimento que impressiona seus clientes🤝.
                <br></br> Para
                desbloquear tudo isso e muito mais, ative o modo <AuroraText>Premium</AuroraText>💎
                e tenha acesso a ferramentas exclusivas👇👇.
              </p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📞 Suporte Humano Prioritário</CardTitle>
              </CardHeader>
              <CardContent>
                Fale diretamente com especialistas sempre que precisar.
                Atendimento rápido e personalizado.
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>🔔 Notificações Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                Envie lembretes automáticos para clientes sobre revisões,
                serviços e promoções.
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📊 Relatórios Profissionais</CardTitle>
              </CardHeader>
              <CardContent>
                Tenha acesso a dados no plano gratuito. No plano pago, exporte
                relatórios prontos, com layout profissional e visual agradável.
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>🛠️ Histórico Completo de Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                Acompanhe todos os serviços realizados em cada veículo, com
                registros organizados e acessíveis a qualquer momento.
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📅 Agendamento Online Simplificado</CardTitle>
              </CardHeader>
              <CardContent>
                Permita que seus clientes agendem serviços diretamente pelo
                celular, com confirmação automática e integração ao calendário
                da oficina.
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📱 Painel do Cliente Online</CardTitle>
              </CardHeader>
              <CardContent>
                Ofereça um portal exclusivo para seus clientes acompanharem o
                status do serviço, histórico e orçamentos.
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
