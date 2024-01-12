import DropDown from "./DropDown";

const Nav = () =>{
    return <nav className={"w-10/12 flex gap-10 items-center"}>
        <a href="#" className="text-md text-gray-400 hover:text-primary">Pricing</a>
        <a href="#" className="text-md text-gray-400 hover:text-primary">About</a>
        <a href="#" className="text-md text-gray-400 hover:text-primary">Blog</a>
        <a href="#" className="text-md text-gray-400 hover:text-primary">Wall of Love</a>
        <DropDown/>
        <a href="#" className="text-md text-gray-400 hover:text-primary">sign in</a>
        <a href="#" className="text-md text-gray-300 hover:text-gray-200 hover:gap-4 transition-all flex items-center gap-3 ">
            Request Demo
            <i className="bi bi-arrow-right text-primary"></i>
        </a>
    </nav>
}
export default Nav