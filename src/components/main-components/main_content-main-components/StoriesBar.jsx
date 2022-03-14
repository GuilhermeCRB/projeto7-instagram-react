import Story from "./Story";

const stories = [
  {userName: "9gag", image: "assets/img/9gag.svg"},
  {userName: "meowed", image: "assets/img/meowed.svg"},
  {userName: "barked", image: "assets/img/barked.svg"},
  {userName: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg"},
  {userName: "wawawicomics", image: "assets/img/wawawicomics.svg"},
  {userName: "respondeai", image: "assets/img/respondeai.svg"},
  {userName: "filomoderna", image: "assets/img/filomoderna.svg"},
  {userName: "memeriagourmet", image: "assets/img/memeriagourmet.svg"}
]


export default function StoriesBar(){
    return(
        <div class="stories">
          {stories.map(story => <Story userName={story.userName} image={story.image} />)}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}