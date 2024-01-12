import Play from "@/utils/icons/Play.tsx";
import React, {createRef} from "react";

const Image = () =>{
    const video :React.RefObject<HTMLVideoElement> = createRef()
    const HandelPlay = () => {
        const element = video.current
        if (!element) return
        element.play()
        element.requestFullscreen()

    }
    return(
        <div className={'w-1/2 flex items-center justify-around '}>
            <div className={'relative  border-2 border-gray-500 w-[540px] h-[405px] flex justify-center items-center'}>
                <video ref={video} src="https://preview.cruip.com/tidy/videos/video.mp4"  poster={'https://preview.cruip.com/tidy/images/hero-image-01.jpg'} className={'absolute -top-4 -left-4'}>

                </video>
                <button onClick={HandelPlay} className={'w-24 h-24 rounded-full bg-white-custom  z-20 cursor-pointer hover:bg-white flex items-center justify-center'}>
                    <Play/>
                </button>
            </div>
        </div>
    )
}
export default Image