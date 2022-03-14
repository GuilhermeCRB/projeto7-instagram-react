export default function Story(props){
    const {userName, image} = props;

    return(
        <div class="story">
            <div class="imagem">
                <img src={image} />
            </div>
            <div class="usuario">
                {userName}
            </div>
        </div>
    );
}