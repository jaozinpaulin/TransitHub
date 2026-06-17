import busHero from './assets/hero/city bus-bro.svg'
import SearchBar from './SearchBar'

export default function Hero() {
    return (
        <section className='sectionHero  w-full pt-36 gap-10'>

            <div className='w-full flex items-center justify-around gap-10'>

                <SearchBar />
                <div className='w-[45%]'>
                    <img src={busHero} />
                </div>
            </div>

        </section>
    )
} 