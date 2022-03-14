import Suggestion from "./suggestion_area-main-components/Suggestion";
import SuggestionTitle from "./suggestion_area-main-components/SuggestionTitle"

const suggestions = [
  {name: "bad.vibes.memes", src: "assets/img/bad.vibes.memes.svg", reason: "Segue você"},
  {name: "chibirdart", src: "assets/img/chibirdart.svg", reason: "Segue você"},
  {name: "razoesparaacreditar", src: "assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram"},
  {name: "adorable_animals", src: "assets/img/adorable_animals.svg", reason: "Segue você"},
  {name: "smallcutecats", src: "assets/img/smallcutecats.svg", reason: "Segue você"}
]

export default function SuggestionsArea(){
    return (
        <div class="sugestoes">
          <SuggestionTitle />
          {suggestions.map(suggestion => <Suggestion name={suggestion.name} src={suggestion.src} reason={suggestion.reason} />)}
        </div>
    );
}