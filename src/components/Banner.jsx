import imgBanner from './assets/busCard/BannerOF1.png'

export default function Banner() {
    return (
        <div className="w-[75%] mx-auto h-[500px] overflow-hidden rounded-2xl">
            <img
                src={imgBanner}
                className="w-full h-full object-cover"
            />
        </div>
    )
}