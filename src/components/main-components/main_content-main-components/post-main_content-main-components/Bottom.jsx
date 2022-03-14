import Actions from "./bottom-post-components/Actions";
import LikesInfo from "./bottom-post-components/LikesInfo";

export default function Bottom(props){
    const {likePicture, liked, likeNumber} = props;

    return(
        <div class="fundo">
            <Actions />
            <LikesInfo likePicture={likePicture} liked={liked} likeNumber={likeNumber} />
        </div>
    );
}