import { FaArrowRightArrowLeft } from "react-icons/fa6";



export default function SearchBar() {

    return (

        <div className="w-[30%]  mx-auto p-4 rounded-l-2xl border-r-2 border-bg-input flex flex-col items-center justify-center gap-8 bg-bg-surface-main">

            {/* Linha 1 */}
            <div className="relative flex flex-col items-center justify-center gap-4 w-full">

                <input
                    type="text"
                    placeholder="De onde você vai sair?"
                    className="bg-bg-input p-3 rounded-xl w-full text-white focus:border-bg-input focus:ring-2 focus:ring-accent-neon outline-none"
                />

                <FaArrowRightArrowLeft className="bg-accent-primary  absolute right-4 text-bg-surface-main hover:bg-accent-neon hover:text-bg-input transition-all duration-300 cursor-pointer w-13 h-11 p-2 rounded-2xl" />

                <input
                    type="text"
                    placeholder="Para onde você deseja ir?"
                    className="bg-bg-input p-3 rounded-xl w-full text-white focus:border-bg-input focus:ring-2 focus:ring-accent-neon outline-none"
                />

            </div>

            {/* Linha 2 */}
            <div className="w-full flex flex-col gap-4 text-text-secondary">

                <div className='w-full flex gap-4'>

                    <div className="relative w-full bg-bg-input py-3 px-4 rounded-xl flex items-center">
                        <label className="absolute left-4 text-sm text-text-secondary">
                            Data de Ida
                        </label>

                        <input
                            type="date"
                            className="w-full bg-transparent outline-none text-transparent cursor-pointer "
                        />
                    </div>

                    <div className="relative w-full bg-bg-input py-3 px-4 rounded-xl flex items-center">

                        <label className="absolute left-4 text-sm text-text-secondary">
                            Volta (Opcional)
                        </label>

                        <input
                            type="date"
                            className="w-full bg-transparent outline-none text-transparent cursor-pointer "
                        />
                    </div>

                </div>
                <button
                    className="bg-accent-primary  py-3 rounded-xl  text-black font-semibold text-[clamp(0.9rem,1.5vw,1.25rem)] transition-all duration-300 cursor-pointer"
                >
                    Planejar
                </button>

            </div>

        </div>
    )
}