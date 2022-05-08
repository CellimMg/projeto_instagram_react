export default function Perfil(props) {
    return (
        <div class="perfil">
            <img class="hover-effect" src="assets/icons/suggestions/catanacomics.svg" />
            <div>
                <span class="hover-effect">{props.perfil}</span>
                <span>{props.nome}</span>
            </div>
        </div>
    );
}