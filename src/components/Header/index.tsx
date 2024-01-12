import {LogoIcon} from "@/utils/icons/Logo.tsx";
import Nav from "./Nav.tsx";

const Header = () =>{
    return (
        <header className={'w-full flex py-4 px-10 bg-secondary justify-around'}>
            <LogoIcon />
            <Nav />
        </header>
    )
}
export default Header