export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div>
                <img class="hover-effect" src={props.imagem} />
                <div>
                    <span class="hover-effect">{props.perfil}</span>
                    <span>{props.status}</span>
                </div>
            </div>
            <span class="hover-effect">Seguir</span>
        </div>
    );
}