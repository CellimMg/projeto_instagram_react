export default function Perfil(props) {
    return (
        <div class="perfil">
            <img class="hover-effect" src={props.image} />
            <div>
                <span class="hover-effect">{props.perfil}</span>
                <span>{props.nome}</span>
            </div>
        </div>
    );
}