"use client";

import { AppSidebar } from "@/components/sidebar";
import React from "react";
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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Finance() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [veiculo, setVeiculo] = React.useState("");
  const [valor, setValor] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
    setVeiculo("");
    setValor("");
  };

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
                  Funcionalidades🛠️⚙️
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Gestão Financeira</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col p-4 w-full">
          <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto mt-4 flex flex-col items-center justify-center text-center w-full">
            <h2 className="text-2xl font-bold mb-2 w-full">Finanças</h2>
            <div className="flex items-center justify-center mb-4 gap-2 text-center">
              <span className="text-lg">Lucro do mês:</span>
              <span className="text-2xl font-semibold text-green-600">
                R$ 450,00
              </span>
            </div>
            <Button onClick={() => setModalOpen(true)}>
              Adicionar Serviço
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto mt-4 flex flex-col items-center w-full">
            <h3 className="text-lg font-bold mb-2">Gráfico</h3>
            <div className="w-full h-40 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white">
                Recurso <AuroraText>PREMIUM</AuroraText>💎
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto mt-4 w-full">
            <h3 className="text-lg font-bold mb-4">Serviços Recentes</h3>
            <ul className="divide-y">
              <li className="py-2 flex justify-between">
                <span>Troca de óleo - Fiat Uno 2012</span>
                <span className="text-green-600 font-semibold">R$ 120,00</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Revisão geral - VW Gol 2015</span>
                <span className="text-green-600 font-semibold">R$ 350,00</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Alinhamento - Honda Civic 2018</span>
                <span className="text-green-600 font-semibold">R$ 80,00</span>
              </li>
            </ul>
          </div>
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Serviço</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Label htmlFor="veiculo">Problema resolvido</Label>
                <Input
                  id="problema"
                  type="text"
                  onChange={(e) => setVeiculo(e.target.value)}
                  placeholder="Ex: Troca de Pneu"
                  required
                />
                <Label htmlFor="veiculo">Veículo trabalhado</Label>
                <Input
                  id="veiculo"
                  type="text"
                  value={veiculo}
                  onChange={(e) => setVeiculo(e.target.value)}
                  placeholder="Ex: Fiat Uno 2012"
                  required
                />
                <Label htmlFor="valor">Valor recebido (R$)</Label>
                <Input
                  id="valor"
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  placeholder="Ex: 350.00"
                  min="0"
                  step="0.01"
                  required
                />
                <div className="flex gap-2 mt-4">
                  <Button type="submit">
                    Salvar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
