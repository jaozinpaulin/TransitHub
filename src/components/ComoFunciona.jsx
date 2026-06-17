export default function ComoFunciona() {
    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center text-center gap-3 mb-14">

                    <span className="text-accent-neon uppercase tracking-[0.2em] text-[10px] font-semibold">
                        Como Funciona
                    </span>

                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                        Planeje sua viagem em poucos minutos
                    </h2>

                    <p className="text-sm text-text-muted max-w-xl">
                        Compare horários, preços e empresas de transporte em uma única plataforma.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-bg-input border border-white/10 rounded-3xl p-8">

                        <div className="w-14 h-14 rounded-full bg-blue-500/40 flex items-center justify-center mb-6">
                            <span className="text-xl font-bold">
                                🔍
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold text-text-primary mb-3">
                            Pesquise
                        </h3>

                        <p className="text-sm text-text-muted leading-relaxed">
                            Informe sua origem, destino e data da viagem para encontrar as melhores opções.
                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-bg-card border border-white/10 rounded-3xl p-8">

                        <div className="w-14 h-14 rounded-full bg-accent-neon/30 flex items-center justify-center mb-6">
                            <span className="text-accent-neon text-xl font-bold">
                                ⚖️
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold text-text-primary mb-3">
                            Compare
                        </h3>

                        <p className="text-sm text-text-muted leading-relaxed">
                            Compare preços, horários e benefícios das principais viações do Brasil.
                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-bg-input border border-white/10 rounded-3xl p-8">

                        <div className="w-14 h-14 rounded-full bg-green-500/30 flex items-center justify-center mb-6">
                            <span className="text-green-400 text-xl font-bold">
                                🎫
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold text-text-primary mb-3">
                            Viaje
                        </h3>

                        <p className="text-sm text-text-muted leading-relaxed">
                            Reserve sua passagem com segurança e embarque com tranquilidade.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}



