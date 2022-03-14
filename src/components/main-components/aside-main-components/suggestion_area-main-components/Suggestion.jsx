export default function Suggestion(props){
    const {name, src, reason} = props;

    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={src} />
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}