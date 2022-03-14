export default function Top(props){
    const {userName, profilePicture} = props;

    return(
        <div class="topo">
            <div class="usuario">
                <img src={profilePicture} />
                {userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}