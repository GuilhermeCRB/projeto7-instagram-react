import Post from "./Post";

const posts = [
  {userName: "meowed", profilePicture: "assets/img/meowed.svg", postPicture: "assets/img/gato-telefone.svg", likePicture: "assets/img/respondeai.svg", liked: "respondeai", likeNumber: "101.523"},
  {userName: "barked", profilePicture: "assets/img/barked.svg", postPicture: "assets/img/dog.svg", likePicture: "assets/img/adorable_animals.svg", liked: "adorable_animals", likeNumber: "99.159"}
]

export default function PostsArea(){
    return(
        <div class="posts">
            {posts.map(post => <Post userName={post.userName} profilePicture={post.profilePicture} postPicture={post.postPicture} likePicture={post.likePicture} liked={post.liked} likeNumber={post.likeNumber} />)}
        </div>
    );
} 