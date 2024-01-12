import anime from 'animejs/lib/anime.es.js';
import React, {createRef} from "react";

const DropDown = () => {
    const ref : React.Ref<HTMLDivElement> = createRef()
    const  handleMouseEnter = () =>{
        const drop = ref.current
        drop?.classList.remove('hidden')
        anime({
            targets : drop ,
            opacity : ["0%" , '100%'],
            duration: 3000
        })

    }
    const  handleMouseLeave = () => {
        const drop = ref.current
        anime({
            targets : drop ,
            opacity : ["100%" , '0%'],
            duration: 3000
        })
        drop?.classList.remove('hidden')
    }
    return (
        <div onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} className={'flex-grow'}>
    <button data-collapse-toggle="navbar-dropdown" type="button" id={'btn-drop'}
    className="inline-flex items-center p-2 gap-3 justify-center text-sm text-gray-500 rounded-lg  focus:outline-none "
    aria-controls="navbar-dropdown" aria-expanded="false">
    <span className="text-md text-gray-400">Resources</span>
        <img src="/public/arrow-thin-chevron-bottom-icon.svg" alt="" className="fill-gray-400 size-3"/>
        </button>
        <div className={'hidden drop absolute bg-white p-3 rounded-lg w-40 h-24 z-10'} ref={ref}>
    <ul className={"w-full flex flex-col gap-4"}>
    <li>
        <a href="#" className={"text-gray-900 text-md hover:text-primary"}>404</a>
    </li>
    <li>
    <a href="#" className={"text-gray-900 text-md hover:text-primary"}>Support</a>
        </li>
        </ul>
        </div>
        </div>
)
}
export default DropDown