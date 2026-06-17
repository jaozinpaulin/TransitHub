export default function Estatisticas() {
    return (

        <section className="w-full px-6 py-3 bg-bg-surface-main">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">

                <div className="flex-1 bg-bg-surface-card border border-white/5 rounded-2xl p-4">
                    <h3 className="text-2xl font-bold text-accent-neon">
                        +150
                    </h3>

                    <p className="text-sm text-text-muted mt-1">
                        Cidades conectadas em todo o Brasil
                    </p>
                </div>

                <div className="flex-1 bg-bg-surface-card border border-white/5 rounded-2xl p-4">
                    <h3 className="text-2xl font-bold text-green-400">
                        +50
                    </h3>

                    <p className="text-sm text-text-muted mt-1">
                        Empresas parceiras verificadas
                    </p>
                </div>

                <div className="flex-1 bg-bg-surface-card border border-white/5 rounded-2xl p-4">
                    <h3 className="text-2xl font-bold text-blue-400">
                        +100 mil
                    </h3>

                    <p className="text-sm text-text-muted mt-1">
                        Passageiros atendidos com segurança
                    </p>
                </div>

            </div>
        </section>
    )
}