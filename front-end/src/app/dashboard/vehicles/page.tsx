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
import Image from "next/image";
import { ComboboxPopover } from "@/components/ui/combobox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Vehicles() {
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
                <BreadcrumbLink href="#">Funcionalidades🛠️⚙️</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Veículos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex items-center justify-between px-4 lg:px-6 p-4">
          <Label htmlFor="view-selector" className="sr-only">
            View
          </Label>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">Cadastrar novo veículo</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Cadastrar novo veículo</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Placa:</Label>
                    <Input
                      id="name-1"
                      name="name"
                      placeholder="ABC2025"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Modelo:</Label>
                    <Input
                      id="cell-1"
                      name="number"
                      placeholder="Honda"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Ano:</Label>
                    <Input
                      id="email-1"
                      name="Email"
                      type="number"
                      required
                      placeholder="2023"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Problema</Label>
                    <Input
                      id="endereco-1"
                      placeholder="Trocar Pneu"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Valor Estimado:</Label>
                    <Input
                      id="cell-1"
                      name="number"
                      placeholder="R$132"
                      required
                    />
                  </div>
                  <div className="grid gap-3 mt-3 mb-3 justify-center items-center">
                    <Label className="font-extrabold" htmlFor="name-1">Adicione imagem com o <AuroraText>PREMIUM</AuroraText>💎</Label>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button type="submit">Adicionar</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <span className="hidden lg:inline">
                Mais recursos com o <AuroraText>PREMIUM</AuroraText>💎
              </span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <Card className="shadow-md flex justify-center items-center">
            <CardHeader className="flex justify-center items-center w-full">
              <CardTitle>Carro da Ana</CardTitle>
            </CardHeader>
            <Image
              src="https://images.pexels.com/photos/14105595/pexels-photo-14105595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="imgthumb"
              width="300"
              height="315"
              className="rounded-3xl"
            ></Image>
            <CardContent className="flex flex-row justify-center w-full items-center gap-4">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <h2>Placa:</h2>
                  <p>ABC2025</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Modelo:</h2>
                  <p>Honda</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Ano:</h2>
                  <p>2025</p>
                </div>
              </div>
              <div className="h-full flex items-center">
                <div className="w-px h-full bg-gray-400"></div>
              </div>
              <div className="flex flex-col justify-end items-center">
                <div className="flex flex-row gap-2">
                  <h2>Problema:</h2>
                  <p>Trocar Pneu</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Valor estimado:</h2>
                  <p>R$234</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <h2>Status:</h2>
                  <ComboboxPopover />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md flex justify-center items-center">
            <CardHeader className="flex justify-center items-center w-full">
              <CardTitle>Carro da Ana</CardTitle>
            </CardHeader>
            <Image
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
              alt="imgthumb"
              width="300"
              height="315"
              className="rounded-3xl"
            ></Image>
            <CardContent className="flex flex-row justify-center w-full items-center gap-4">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <h2>Placa:</h2>
                  <p>ABC2025</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Modelo:</h2>
                  <p>Honda</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Ano:</h2>
                  <p>2025</p>
                </div>
              </div>
              <div className="h-full flex items-center">
                <div className="w-px h-full bg-gray-400"></div>
              </div>
              <div className="flex flex-col justify-end items-center">
                <div className="flex flex-row gap-2">
                  <h2>Problema:</h2>
                  <p>Trocar Pneu</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Valor estimado:</h2>
                  <p>R$234</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <h2>Status:</h2>
                  <ComboboxPopover />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md flex justify-center items-center">
            <CardHeader className="flex justify-center items-center w-full">
              <CardTitle>Carro da Ana</CardTitle>
            </CardHeader>
            <Image
              src="https://images.pexels.com/photos/968398/pexels-photo-968398.jpeg"
              alt="imgthumb"
              width="300"
              height="315"
              className="rounded-3xl"
            ></Image>
            <CardContent className="flex flex-row justify-center w-full items-center gap-4">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <h2>Placa:</h2>
                  <p>ABC2025</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Modelo:</h2>
                  <p>Honda</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Ano:</h2>
                  <p>2025</p>
                </div>
              </div>
              <div className="h-full flex items-center">
                <div className="w-px h-full bg-gray-400"></div>
              </div>
              <div className="flex flex-col justify-end items-center">
                <div className="flex flex-row gap-2">
                  <h2>Problema:</h2>
                  <p>Trocar Pneu</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Valor estimado:</h2>
                  <p>R$234</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <h2>Status:</h2>
                  <ComboboxPopover />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md flex justify-center items-center">
            <CardHeader className="flex justify-center items-center w-full">
              <CardTitle>Carro da Ana</CardTitle>
            </CardHeader>
            <Image
              src="https://images.pexels.com/photos/14105595/pexels-photo-14105595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="imgthumb"
              width="300"
              height="315"
              className="rounded-3xl"
            ></Image>
            <CardContent className="flex flex-row justify-center w-full items-center gap-4">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <h2>Placa:</h2>
                  <p>ABC2025</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Modelo:</h2>
                  <p>Honda</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Ano:</h2>
                  <p>2025</p>
                </div>
              </div>
              <div className="h-full flex items-center">
                <div className="w-px h-full bg-gray-400"></div>
              </div>
              <div className="flex flex-col justify-end items-center">
                <div className="flex flex-row gap-2">
                  <h2>Problema:</h2>
                  <p>Trocar Pneu</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Valor estimado:</h2>
                  <p>R$234</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <h2>Status:</h2>
                  <ComboboxPopover />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md flex justify-center items-center">
            <CardHeader className="flex justify-center items-center w-full">
              <CardTitle>Carro da Ana</CardTitle>
            </CardHeader>
            <Image
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
              alt="imgthumb"
              width="300"
              height="315"
              className="rounded-3xl"
            ></Image>
            <CardContent className="flex flex-row justify-center w-full items-center gap-4">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <h2>Placa:</h2>
                  <p>ABC2025</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Modelo:</h2>
                  <p>Honda</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Ano:</h2>
                  <p>2025</p>
                </div>
              </div>
              <div className="h-full flex items-center">
                <div className="w-px h-full bg-gray-400"></div>
              </div>
              <div className="flex flex-col justify-end items-center">
                <div className="flex flex-row gap-2">
                  <h2>Problema:</h2>
                  <p>Trocar Pneu</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Valor estimado:</h2>
                  <p>R$234</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <h2>Status:</h2>
                  <ComboboxPopover />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md flex justify-center items-center">
            <CardHeader className="flex justify-center items-center w-full">
              <CardTitle>Carro da Ana</CardTitle>
            </CardHeader>
            <Image
              src="https://images.pexels.com/photos/968398/pexels-photo-968398.jpeg"
              alt="imgthumb"
              width="300"
              height="315"
              className="rounded-3xl"
            ></Image>
            <CardContent className="flex flex-row justify-center w-full items-center gap-4">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <h2>Placa:</h2>
                  <p>ABC2025</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Modelo:</h2>
                  <p>Honda</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Ano:</h2>
                  <p>2025</p>
                </div>
              </div>
              <div className="h-full flex items-center">
                <div className="w-px h-full bg-gray-400"></div>
              </div>
              <div className="flex flex-col justify-end items-center">
                <div className="flex flex-row gap-2">
                  <h2>Problema:</h2>
                  <p>Trocar Pneu</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h2>Valor estimado:</h2>
                  <p>R$234</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <h2>Status:</h2>
                  <ComboboxPopover />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
