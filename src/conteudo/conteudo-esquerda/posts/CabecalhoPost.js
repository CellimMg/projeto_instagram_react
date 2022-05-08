export default function CabecalhoPost(props) {
    return (
        <div class="cabecalho-postagem">
            <div>
                <img class="hover-effect" src={props.image} />
                <span class="hover-effect">{props.title}</span>
            </div>
            <ion-icon class="hover-effect" name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    );
}