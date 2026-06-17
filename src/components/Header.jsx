export default function Header() {
    return (
        <header className="fixed  top-5 left-1/2  -translate-x-1/2  w-[90%] z-999 bg-bg-surface-input flex items-center justify-between text-amber-50 p-5 rounded-bl-3xl rounded-tl-3xl border-r-2 border-green-300">

            <div className="w-full px-10 flex items-center justify-between">

                <div className="flex items-center">
                    <span className="text-2xl font-bold text-text-primary">Transit</span>
                    <span className="text-2xl font-bold text-text-muted">Hub</span>

                </div>

                <nav>
                    <ul className=" flex gap-8 text-gray-300">

                        <li><a className="navAlinks relative px-3  font-medium transition-all duration-300" href="#">Início</a></li>
                        <li><a className="navAlinks relative px-3  font-medium transition-all duration-300" href="#">Linhas</a></li>
                        <li><a className="navAlinks relative px-3  font-medium transition-all duration-300" href="#">Mapa</a></li>
                        <li><a className="navAlinks relative px-3  font-medium transition-all duration-300" href="#">Perfil</a></li>
                        <li><a className="navAlinks relative px-3  font-medium transition-all duration-300" href="#">Ajuda</a> </li>
                        <li>
                            <a href="#" className="px-5 py-2 bg-accent-primary text-black font-semibold rounded-3xl">
                                Planejar Viagem
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    );
}
