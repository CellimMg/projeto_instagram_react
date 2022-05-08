import Comentario from "./Comentario";

export default function Comentarios(props) {
    const comentarios = props.comentarios;
    return (
        <div class="comentarios">
            {comentarios.map(comentario => <Comentario userName={comentario.userName} comentario={comentario.comentario} />)}
        </div>
    );
}