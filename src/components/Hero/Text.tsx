import ArrowRight from "@/utils/icons/Arrow-right.tsx";

const Text = () =>{
    return(
        <div className={"w-1/2 flex flex-col justify-center items-center "}>
            <div className={'flex flex-col items-start justify-center w-10/12'}>
                <h1 className={'font-Playfair text-6xl font-bold text-white mb-4'}>
                    Create stunning web experiences
                </h1>
                <p className={'font-Inter text-gray-custom text-xl mb-8'}>
                    Our landing page template works on all devices, so you only have to set it up once, and get
                    beautiful results forever.
                </p>
                <div className={'flex gap-4 items-center '}>
                    <button className="bg-primary py-3 px-6 rounded-sm text-white flex items-center gap-1  ">
                        <span className={'text-white'}>Request Demo</span>
                        <ArrowRight/>
                    </button>
                    <button className="bg-gray-custom py-3 px-6 rounded-sm text-white ">Explore Product</button>
                </div>
            </div>
        </div>
    )
}
export default Text