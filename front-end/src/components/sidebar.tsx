"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Logo } from "./ui/logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const data = {
    navMain: [
      {
        title: "Bem vindo🌟🎉",
        url: "#",
        items: [
          { title: "Bem vindo a plataforma", url: "/dashboard/welcome" },
          { title: "Como turbinar sua oficina", url: "/dashboard/guide" },
        ],
      },
      {
        title: "Funcionalidades🛠️⚙️",
        url: "#",
        items: [
          { title: "Relatorio", url: "/dashboard/report" },
          { title: "Clientes", url: "/dashboard/customers" },
          { title: "Veiculos", url: "/dashboard/vehicles" },
          { title: "Gestão Financeira (experimental)", url: "/dashboard/finance" },
          { title: "📊Relatórios Profissionais", Highlight: true },
          { title: "🔔Notificações Personalizadas", Highlight: true },
          { title: "🎁Programa de Fidelidade", Highlight: true },
          { title: "📅Agendamento Online", Highlight: true },
          { title: "📱Painel do Cliente Online", Highlight: true },
        ],
      },
      {
        title: "Suporte👨‍💻⚙️",
        url: "#",
        items: [
          { title: "📞Suporte Humano Prioritário", Highlight: true },
          { title: "Suporte geral", url: "/dashboard/support" },
          { title: "Assinatura", url: "/dashboard/subscription" },
        ],
      },
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <a
                          href={item.url}
                          className={
                            item.Highlight ? "cursor-not-allowed bg-gray-300 opacity-50" : ""
                          }
                        >
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
