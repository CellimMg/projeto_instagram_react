import CabecalhoPost from "./CabecalhoPost";
import InfoPost from "./InfoPost";
import Comentarios from "./Comentarios";
import ConteudoPost from "./ConteudoPost";
import React from 'react';

export default function Post(props) {

    const [like, setLike] = React.useState(false);

    function likePost() {
        setLike(true);
    }

    function likeButton() {
        setLike(!like);
    }



    return (<div class="postagem">
        <CabecalhoPost name={props.name} image={props.image} />
        <ConteudoPost click={likePost} conteudoPost={props.conteudoPost} />
        <InfoPost click={likeButton} curtidoPor={props.curtidoPor} qtdCurtidas={props.qtdCurtidas} like={like} />
        <Comentarios comentarios={props.comentarios} />
        <div class="comentar">
            <div>
                <ion-icon class="hover-effect" name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
            </div>
            <span>Publicar</span>
        </div>
    </div>);
}