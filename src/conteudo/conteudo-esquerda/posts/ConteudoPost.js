export default function ConteudoPost(props) {
    if (props.conteudoPost.includes(".mp4")) {
        return (
            <video onClick={props.click} autoPlay muted loop >
                <source src={props.conteudoPost} type="video/mp4" />
                Seu browser não suporta este formato de vídeo
            </video>
        );
    }
    return (
        <img onClick={props.click} src={props.conteudoPost} alt="" />
    );
}