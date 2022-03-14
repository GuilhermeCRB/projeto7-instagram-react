import Aside from "./main-components/Aside"
import MainContent from "./main-components/MainContent";

export default function Main(){
    return(
      <div class="corpo">
        <MainContent />
        <Aside />
      </div>
    );
}