import User from "./aside-main-components/User";
import SuggestionsArea from "./aside-main-components/SuggestionsArea";
import Links from "./aside-main-components/Links"
import Copyright from "./aside-main-components/Copyright"

export default function Aside(){
    return(
        <div class="sidebar">
            <User name="Catana" nickName="catanacomics" image="assets/img/catanacomics.svg" />
            <SuggestionsArea />
            <Links />
            <Copyright />
        </div>
    );
}