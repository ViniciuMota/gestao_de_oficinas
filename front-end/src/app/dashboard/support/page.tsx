import { AppSidebar } from "@/components/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Support() {
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
                <BreadcrumbLink href="#">
                  Suporte👨‍💻⚙️
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Suporte Geral</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col justify-center items-center gap-4 p-4 w-full bg-muted/50">
          <div className="w-1/2">
            <h1 className="text-center text-2xl font-bold">Suporte</h1>
            <form className="flex flex-col gap-4 bg-white p-6 rounded-xl justify-center items-center">
              <div className="w-full">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tipo
                </label>
                <select
                  id="type"
                  name="type"
                  className="mt-1 w-full block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Problema Técnico</option>
                  <option>Dúvida</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Seuemail@email.com"
                  id="email"
                  name="email"
                  className="mt-1 w-full block p-2 h-6 rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Descreva seu problema ou dúvida aqui..."
                  rows={4}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <Button className="w-full">Enviar</Button>
            </form>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
