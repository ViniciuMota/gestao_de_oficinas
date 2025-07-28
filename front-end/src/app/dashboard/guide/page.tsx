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
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";

export default function Guide() {
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
                <BreadcrumbPage>Como turbinar sua oficina</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="p-6 md:p-10 space-y-8">
          <div className="w-full flex justify-center items-center">
            <div className="relative rounded-2xl">
              <Image
                src="/thumb.png"
                alt="imgthumb"
                width="560"
                height="315"
                className="rounded-2xl brightness-70"
              ></Image>
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-2xl">
                <p className="text-white text-2xl font-semibold text-center px-4 bg-black/70 rounded-2xl p-2">
                  Video reservado para membros{" "}
                  <AuroraText className=" rounded-xl uppercase tracking-wide text-white">
                    Premium
                  </AuroraText>
                  <span className="text-3xl">💎</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>👤 Cadastre seu primeiro cliente</CardTitle>
              </CardHeader>
              <CardContent>
                Comece adicionando um cliente para vincular serviços e veículos
                futuramente.
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>🚗 Adicione um veículo</CardTitle>
              </CardHeader>
              <CardContent>
                Cadastre um veículo para começar o controle de histórico e
                manutenções.
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>💰 Configure sua gestão financeira</CardTitle>
              </CardHeader>
              <CardContent>
                Organize entradas, despesas e acompanhe o fluxo de caixa da sua
                oficina de forma simples.
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📊 Veja seu primeiro relatório</CardTitle>
              </CardHeader>
              <CardContent>
                Acesse os dados de entrada e visualizações para entender como
                tudo se conecta.
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>
                  🎯 Explore recursos <AuroraText>Premium</AuroraText>💎
                </CardTitle>
              </CardHeader>
              <CardContent>
                Conheça funcionalidades como notificações, fidelidade e painel
                do cliente.
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>📞 Precisa de ajuda?</CardTitle>
              </CardHeader>
              <CardContent>
                Nossa equipe está pronta para te apoiar. Envie uma mensagem a
                qualquer momento pelo chat.
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
