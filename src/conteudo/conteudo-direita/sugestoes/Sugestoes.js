import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestoes = [
        {
            imagem: "assets/icons/suggestions/badvibesmemes.svg",
            perfil: "bad.vibes.memes",
            status: "Segue você"
        },
        {
            imagem: "assets/icons/suggestions/chibirdart.svg",
            perfil: "chibirdart",
            status: "Segue você"
        },
        {
            imagem: "assets/icons/suggestions/razoesparaacreditar.svg",
            perfil: "razoesparaacreditar",
            status: "Novo no Instagram"
        },
        {
            imagem: "assets/icons/suggestions/adorableanimals.svg",
            perfil: "adorable_animals",
            status: "Segue você"
        },
        {
            imagem: "assets/icons/suggestions/smallcutecats.svg",
            perfil: "smallcutecats",
            status: "Segue você"
        },
    ];


    return (
        <div class="sugestoes">
            <div>
                <p>Sugestões para você</p>
                <span class="hover-effect">Ver tudo</span>
            </div>
            {sugestoes.map(sugestao => <Sugestao imagem={sugestao.imagem} perfil={sugestao.perfil} status={sugestao.status} />)}
        </div>
    );
}