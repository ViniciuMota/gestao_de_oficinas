"use client"
import { useState, ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputMask } from "@react-input/mask";

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        if (password.length < 8) {
            setError("A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /\d/.test(password);

        if (!hasLetter || !hasNumber) {
            setError("A senha deve conter letras e números.");
            return;
        }

        alert("Conta criada com sucesso!");
    };

    return (
        <div className={cn("flex flex-col gap-4", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2" >
                    <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-2xl font-bold">Registro</h1>
                            <p className="text-muted-foreground text-balance">
                                Digite seus dados abaixo para criar sua conta
                            </p>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">Nome</Label>
                                    <Input id="first-name" placeholder="Nome" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Sobrenome</Label>
                                    <Input id="last-name" placeholder="Sobrenome" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="seu@email.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Celular</Label>
                                    <InputMask
                                        id="phone"
                                        component={Input}
                                        placeholder="(99) 99999-9999"
                                        required
                                        mask="(__) _____-____"
                                        replacement={{ _: /\d/ }}
                                        pattern="\(\d{2}\) \d{5}-\d{4}"
                                        title="Por favor digite um número válido"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Senha</Label>
                                    <Input 
                                    id="password" 
                                    type="password" 
                                    placeholder="**********" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="confirm-password">Confirmar Senha</Label>
                                    <Input 
                                    id="confirm-password" 
                                    type="password" 
                                    placeholder="**********" 
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>

                                {error && <p className="text-sm font-medium text-destructive">{error}</p>}

                                <Button type="submit" className="w-full">
                                    Criar conta
                                </Button>
                                <div className="text-center text-sm">
                                    Já tem uma conta?{" "}
                                    <Link href="/login" className="underline">
                                        Faça login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="bg-muted relative hidden md:block">
                        <img
                            src="/imglogin.jpg"
                            alt="Register-Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}