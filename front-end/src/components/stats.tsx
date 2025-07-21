export default function StatsSection() {
    return (
        <section id="sobre">
            <div className="bg-muted/50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-4xl font-semibold lg:text-5xl">TheOficina em números</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Em breve, TheOficina vai transformar a forma como oficinas gerenciam seus serviços, aumentando a eficiência e facilitando o dia a dia de mecânicos e gestores.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-12 md:mt-16 md:grid-cols-4">
                        <div>
                            <div className="text-foreground text-3xl font-bold">20+</div>
                            <p className="text-muted-foreground">Funcionalidades pensadas para otimizar a gestão da sua oficina</p>
                        </div>
                        <div>
                            <div className="text-foreground text-3xl font-bold">76%</div>
                            <p className="text-muted-foreground">Estimativa de aumento na produtividade das oficinas que adotarem TheOficina</p>
                        </div>
                        <div>
                            <div className="text-foreground text-3xl font-bold">24/7</div>
                            <p className="text-muted-foreground">Atendimento dedicado para garantir que você nunca fique na mão</p>
                        </div>
                        <div>
                            <div className="text-foreground text-3xl font-bold">1000+</div>
                            <p className="text-muted-foreground">Oficinas que esperamos impactar com TheOficina em todo o país</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
