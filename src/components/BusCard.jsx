import busImage from "./assets/busCard/madagascar-header.jpg";
import { TbArrowBigRightLines } from "react-icons/tb";

export default function BusCard() {
    return (
        <section className="w-full mt-15 mx-auto bg-bg-surface-main p-10">

            <div className="flex flex-col items-center justify-center gap-4 mb-12">

                <h2 className="text-3xl font-bold text-text-primary">
                    Viaje pagando menos
                </h2>

                <p className="max-w-2xl text-text-muted">
                    Confira as melhores ofertas disponíveis e garanta sua passagem com economia.
                </p>

            </div>

            <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Card */}
                <div className="relative bg-bg-input rounded-2xl overflow-hidden border border-white/5 hover:border-accent-neon/40 transition hover:-translate-y-1 duration-300">


                    <span className="absolute top-3 left-3 bg-blue-500 border border-blue-400/30 text-text-secondary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Cometa
                    </span>

                    {/* Tag Promoção */}
                    <span className=" absolute top-4 right-4 bg-accent-neon text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                        -30%
                    </span>

                    <img src={busImage} alt="Ônibus" className="w-full h-40 object-cover" />

                    <div className="p-5">

                        <div className="relative flex items-center justify-between gap-3 mb-4 mt-8">

                            <span className="absolute -top-6 left-3 text-xs text-blue-400 font-medium uppercase">
                                de
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-blue-400 font-medium">
                                    Piracicaba
                                </span>
                            </div>

                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-neon/10">
                                <TbArrowBigRightLines
                                    size={22}
                                    className="text-accent-neon"
                                />
                            </div>

                            <span className="absolute -top-6 right-3 text-xs text-accent-neon font-medium uppercase">
                                para
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-accent-neon font-medium">
                                    São Paulo
                                </span>
                            </div>

                        </div>

                        <p className="text-sm text-text-secondary mb-4">
                            Oferta válida por tempo limitado.
                        </p>

                        <div className="flex items-center gap-3 mb-5">

                            <span className="text-text-secondary line-through">
                                R$ 129,90
                            </span>

                            <span className="text-2xl font-bold text-green-400">
                                R$ 89,90
                            </span>

                        </div>

                        <button className=" w-full bg-accent-neon text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                            Ver Oferta
                        </button>

                    </div>

                </div>
                <div className="relative bg-bg-input rounded-2xl overflow-hidden border border-white/5 hover:border-accent-neon/40 transition hover:-translate-y-1 duration-300">


                    <span className="absolute top-3 left-3 bg-blue-500 border border-blue-400/30 text-text-secondary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Cometa
                    </span>

                    {/* Tag Promoção */}
                    <span className=" absolute top-4 right-4 bg-accent-neon text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                        -30%
                    </span>

                    <img src={busImage} alt="Ônibus" className="w-full h-40 object-cover" />

                    <div className="p-5">

                        <div className="relative flex items-center justify-between gap-3 mb-4 mt-8">

                            <span className="absolute -top-6 left-3 text-xs text-blue-400 font-medium uppercase">
                                de
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-blue-400 font-medium">
                                    Piracicaba
                                </span>
                            </div>

                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-neon/10">
                                <TbArrowBigRightLines
                                    size={22}
                                    className="text-accent-neon"
                                />
                            </div>

                            <span className="absolute -top-6 right-3 text-xs text-accent-neon font-medium uppercase">
                                para
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-accent-neon font-medium">
                                    São Paulo
                                </span>
                            </div>

                        </div>

                        <p className="text-sm text-text-secondary mb-4">
                            Oferta válida por tempo limitado.
                        </p>

                        <div className="flex items-center gap-3 mb-5">

                            <span className="text-text-secondary line-through">
                                R$ 129,90
                            </span>

                            <span className="text-2xl font-bold text-green-400">
                                R$ 89,90
                            </span>

                        </div>

                        <button className=" w-full bg-accent-neon text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                            Ver Oferta
                        </button>

                    </div>

                </div>
                <div className="relative bg-bg-input rounded-2xl overflow-hidden border border-white/5 hover:border-accent-neon/40 transition hover:-translate-y-1 duration-300">


                    <span className="absolute top-3 left-3 bg-blue-500 border border-blue-400/30 text-text-secondary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Cometa
                    </span>

                    {/* Tag Promoção */}
                    <span className=" absolute top-4 right-4 bg-accent-neon text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                        -30%
                    </span>

                    <img src={busImage} alt="Ônibus" className="w-full h-40 object-cover" />

                    <div className="p-5">

                        <div className="relative flex items-center justify-between gap-3 mb-4 mt-8">

                            <span className="absolute -top-6 left-3 text-xs text-blue-400 font-medium uppercase">
                                de
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-blue-400 font-medium">
                                    Piracicaba
                                </span>
                            </div>

                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-neon/10">
                                <TbArrowBigRightLines
                                    size={22}
                                    className="text-accent-neon"
                                />
                            </div>

                            <span className="absolute -top-6 right-3 text-xs text-accent-neon font-medium uppercase">
                                para
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-accent-neon font-medium">
                                    São Paulo
                                </span>
                            </div>

                        </div>

                        <p className="text-sm text-text-secondary mb-4">
                            Oferta válida por tempo limitado.
                        </p>

                        <div className="flex items-center gap-3 mb-5">

                            <span className="text-text-secondary line-through">
                                R$ 129,90
                            </span>

                            <span className="text-2xl font-bold text-green-400">
                                R$ 89,90
                            </span>

                        </div>

                        <button className=" w-full bg-accent-neon text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                            Ver Oferta
                        </button>

                    </div>

                </div>
                <div className="relative bg-bg-input rounded-2xl overflow-hidden border border-white/5 hover:border-accent-neon/40 transition hover:-translate-y-1 duration-300">


                    <span className="absolute top-3 left-3 bg-blue-500 border border-blue-400/30 text-text-secondary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Cometa
                    </span>

                    {/* Tag Promoção */}
                    <span className=" absolute top-4 right-4 bg-accent-neon text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                        -30%
                    </span>

                    <img src={busImage} alt="Ônibus" className="w-full h-40 object-cover" />

                    <div className="p-5">

                        <div className="relative flex items-center justify-between gap-3 mb-4 mt-8">

                            <span className="absolute -top-6 left-3 text-xs text-blue-400 font-medium uppercase">
                                de
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-blue-400 font-medium">
                                    Piracicaba
                                </span>
                            </div>

                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-neon/10">
                                <TbArrowBigRightLines
                                    size={22}
                                    className="text-accent-neon"
                                />
                            </div>

                            <span className="absolute -top-6 right-3 text-xs text-accent-neon font-medium uppercase">
                                para
                            </span>

                            <div className="bg-bg-primary border border-white/10 px-3 py-2 rounded-xl">
                                <span className="text-accent-neon font-medium">
                                    São Paulo
                                </span>
                            </div>

                        </div>

                        <p className="text-sm text-text-secondary mb-4">
                            Oferta válida por tempo limitado.
                        </p>

                        <div className="flex items-center gap-3 mb-5">

                            <span className="text-text-secondary line-through">
                                R$ 129,90
                            </span>

                            <span className="text-2xl font-bold text-green-400">
                                R$ 89,90
                            </span>

                        </div>

                        <button className=" w-full bg-accent-neon text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                            Ver Oferta
                        </button>

                    </div>

                </div>

                {/* Duplicar mais 3 cards */}

            </div>

        </section>
    );
}