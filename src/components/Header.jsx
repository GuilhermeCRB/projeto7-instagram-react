import Logo from "./header-components/Logo"
import LogoMobile from "./header-components/LogoMobile"
import InstagramMobile from "./header-components/InstagramMobile"
import SearchBar from "./header-components/SearchBar"
import Icons from "./header-components/Icons"
import IconsMobile from "./header-components/IconsMobile.jsx"

export default function Header(){
    return(
        <div class="navbar">
            <div class="container">
                <Logo />
                <LogoMobile />
                <InstagramMobile />
                <SearchBar />
                <Icons />
                <IconsMobile />
            </div>
        </div>
    )
}