export default function LikesInfo(props){
    const {likePicture, liked, likeNumber} = props;

    return(
        <div class="curtidas">
            <img src={likePicture} />
            <div class="texto">
                Curtido por <strong>{liked}</strong> e <strong>outras {likeNumber} pessoas</strong>
            </div>
        </div>
    );
}