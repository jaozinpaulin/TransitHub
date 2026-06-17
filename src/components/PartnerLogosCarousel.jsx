import Milum from './assets/logo/1001C.svg'
import Aguia from './assets/logo/aguia-brancaC.svg'
import Catarinesse from './assets/logo/catarinenseC.svg'
import Cometa from './assets/logo/cometaC.svg'
import Eucatur from './assets/logo/eucaturC.svg'
import Garcia from './assets/logo/garciaC.svg'
import Gontijo from './assets/logo/gontijoC.svg'
import Util from './assets/logo/utilC.svg'



export default function PartnerLogosCarousel() {

    const logos = [Milum, Aguia, Catarinesse, Cometa, Eucatur, Garcia, Gontijo, Util]


    return (


        <section className="py-22  mt-12  overflow-hidden border-t-2 border-bg-surface-card">

            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center gap-2 mb-12">

                    <span className="text-accent-neon uppercase tracking-[0.2em] text-[10px] font-semibold">
                        Empresas Parceiras
                    </span>

                    <h2 className="text-xl font-bold text-text-primary max-w-2xl">
                        As principais viações do Brasil em um só lugar
                    </h2>

                </div>

                <div className="carousel-wrapper w-full bg-bg-surface-main overflow-hidden p-6 rounded-bl-2xl rounded-tl-2xl border-r-2 border-e-bg-surface-input">
                    <div className="carousel-track flex items-center">

                        {[...logos, ...logos].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Logo da empresa"
                                className=" h-12 object-contain mx-8 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
