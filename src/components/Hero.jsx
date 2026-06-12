import busHero from './assets/hero/city bus-bro.svg'

export default function Hero() {
    return (
        <section className='sectionHero  w-full p-14 gap-10'>

            <div className='w-full flex items-center justify-around gap-10'>
                <div className='flex flex-col bg-bg-card w-[35%] gap-6 p-5 rounded-2xl'>

                    <h1 className='text-6xl text-text-primary '>Seu próximo destino começa aqui.</h1>
                    <p className='text-2xl text-text-secondary pb-3 border-b-4 border-bg-input'>Planeje rotas, consulte linhas e acompanhe
                        o transporte em tempo real.</p>

                    <div className="flex items-center justify-around  mt-5 text-accent-primary text-text-primary bg-bg-input py-2 rounded-2xl">
                        <span className='px-2.5 py-1'>Planejamento Inteligente</span>
                        <span className='px-2.5 py-1'>Tempo Real</span>
                        <span className='px-2.5 py-1'>Experiência Moderna</span>
                    </div>
                </div>

                <div className='w-[45%]'>
                    <img src={busHero} />
                </div>
            </div>


            <div className="w-5xl mt-7 mx-auto p-4 rounded-2xl flex flex-col items-center justify-center gap-4 bg-bg-surface-main">

                {/* Linha 1 */}
                <div className="flex items-center justify-center gap-4 w-full">

                    <input
                        type="text"
                        placeholder="De onde você vai sair?"
                        className="bg-bg-input p-4 rounded-xl w-full text-white focus:border-bg-input focus:ring-2 focus:ring-accent-neon outline-none"
                    />
                    <span>Alternar</span>
                    <input
                        type="text"
                        placeholder="Para onde você deseja ir?"
                        className="bg-bg-input p-4 rounded-xl w-full text-white focus:border-bg-input focus:ring-2 focus:ring-accent-neon outline-none"
                    />

                </div>

                {/* Linha 2 */}
                <div className="flex gap-4 items-end text-white">

                    <div className="flex flex-col">
                        <label className="text-sm text-text-secondary mb-1">
                            Data de Ida
                        </label>

                        <input
                            type="date"
                            className="bg-bg-input p-4 rounded-xl outline-none cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-text-secondary mb-1">
                            Volta (Opcional)
                        </label>

                        <input
                            type="date"
                            className="bg-bg-input p-4 rounded-xl outline-none cursor-pointer"
                        />
                    </div>
                    <select
                        className="bg-bg-input p-4 rounded-xl outline-none cursor-pointer"
                    >
                        <option>👤 1 Passageiro</option>
                        <option>👥 2 Passageiros</option>
                        <option>👥 3 Passageiros</option>
                        <option>👥 4+ Passageiros</option>
                    </select>

                    <button
                        className="px-4 py-3 text-text-secondary"
                    >
                        Limpar Filtros
                    </button>

                    <button
                        className="bg-brand px-6 py-3 rounded-xl hover:bg-brand-hover text-white transition-all duration-300 cursor-pointer"
                    >
                        Planejar
                    </button>

                </div>

            </div>

        </section>
    )
} 