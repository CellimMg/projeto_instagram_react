export default function Comentario(props) {
    return (
        <div class="comentario">
            <p><strong>{props.userName}</strong> {props.comentario}</p>
            <ion-icon class="hover-effect" name="heart-outline"></ion-icon>
        </div>
    );
}