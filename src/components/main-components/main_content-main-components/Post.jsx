import Bottom from "./post-main_content-main-components/Bottom";
import Content from "./post-main_content-main-components/Content";
import Top from "./post-main_content-main-components/Top";


export default function Post(props){
    const{userName, profilePicture, postPicture, likePicture, liked, likeNumber} = props;

    return(
        <div class="post">
            <Top userName={userName} profilePicture={profilePicture} />
            <Content postPicture={postPicture} />
            <Bottom likePicture={likePicture} liked={liked} likeNumber={likeNumber} />
        </div>
    );
}