export default function Footer() {
    return (
        <footer className="bg-bg-input border-t border-white/10 mt-20">

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Brand */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold">
                        🚍 TransitHub
                    </h2>

                    <p className="text-text-secondary mt-3 max-w-sm">
                        Compare passagens, encontre os melhores horários
                        e viaje com mais praticidade.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Navegação
                    </h3>

                    <ul className="flex flex-col gap-2 text-text-secondary">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Buscar viagens
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-white transition">
                                Minhas viagens
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-white transition">
                                Favoritos
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contato */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Suporte
                    </h3>

                    <div className="flex flex-col gap-2 text-text-secondary">
                        <span>suporte@transithub.com</span>
                        <span>Brasil</span>
                        <span>Atendimento 24h</span>
                    </div>
                </div>

                {/* Pagamentos */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Pagamentos
                    </h3>

                    <div className="flex flex-wrap gap-2">

                        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs hover:bg-white/10 transition">
                            Pix
                        </span>

                        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs hover:bg-white/10 transition">
                            Visa
                        </span>

                        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs hover:bg-white/10 transition">
                            Mastercard
                        </span>

                        <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs hover:bg-white/10 transition">
                            Débito
                        </span>

                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-text-secondary">

                    <span>
                        © {new Date().getFullYear()} TransitHub. Todos os direitos reservados.
                    </span>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition">
                            Termos
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Privacidade
                        </a>
                    </div>

                </div>

            </div>

        </footer>
    );
}