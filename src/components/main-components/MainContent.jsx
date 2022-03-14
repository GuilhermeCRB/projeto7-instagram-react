import StoriesBar from "./main_content-main-components/StoriesBar";
import PostsArea from "./main_content-main-components/PostsArea"

export default function MainContent(){
    return (
        <div class="esquerda">
          <StoriesBar />
          <PostsArea />
        </div>
    );
}