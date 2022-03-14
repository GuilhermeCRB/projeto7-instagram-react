export default function User(props){
    const{name, nickName, image} = props;

    return(
        <div class="usuario">
            <img src={image} />
            <div class="texto">
                <strong>{nickName}</strong>
                {name}
            </div>
        </div>
    );
}