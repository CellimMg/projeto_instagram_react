import Stories from "./stories/Stories";
import Post from "./posts/Post";

export default function ConteudoEsquerda() {
    const postagens = [
        {
            name: "meowed",
            image: "assets/icons/story/meowed.svg",
            conteudoPost: "assets/images/timeline/gato-telefone 1.png",
            curtidoPor: "adorable_animals",
            qtdCurtidas: "102.523",
            comentarios: [
                {
                    userName: "mais.um.user",
                    comentario: "legal demais!!!",
                },
                {
                    userName: "usuario123",
                    comentario: "shooow!!",
                },
            ]
        },

        {
            name: "barked",
            image: "assets/icons/story/barked.svg",
            conteudoPost: "assets/videos/video.mp4",
            curtidoPor: "adorable_animals",
            qtdCurtidas: "99.159",
            comentarios: [
                {
                    userName: "mais.um.user",
                    comentario: "legal demais!!!",
                },
                {
                    userName: "usuario123",
                    comentario: "shooow!!",
                },
            ]
        },

        {
            name: "driven",
            image: "assets/icons/story/driven.png",
            conteudoPost: "assets/images/timeline/driven.jpg",
            curtidoPor: "adorable_animals",
            qtdCurtidas: "1.000.159",
            comentarios: [
                {
                    userName: "mais.um.user",
                    comentario: "legal demais!!!",
                },
                {
                    userName: "usuario123",
                    comentario: "shooow!!",
                },
            ]
        }
    ];

    return (
        <div class="conteudo-esquerda">
            <Stories />
            <div>
                {postagens.map(post => <Post name={post.name} image={post.image} conteudoPost={post.conteudoPost} curtidoPor={post.curtidoPor} qtdCurtidas={post.qtdCurtidas} comentarios={post.comentarios} />)}
            </div>
        </div>
    );
}