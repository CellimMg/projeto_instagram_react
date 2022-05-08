import ConteudoEsquerda from "./conteudo-esquerda/ConteudoEsquerda";
import ConteudoDireita from "./conteudo-direita/ConteudoDireita";
export default function Conteudo() {
    return (
        <div class="conteudo">
            <ConteudoEsquerda />
            <ConteudoDireita />
        </div>
    );
}