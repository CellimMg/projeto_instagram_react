import Perfil from "./Perfil";
import Sugestoes from "./sugestoes/Sugestoes"

export default function ConteudoDireita() {

    return (
        <div class="conteudo-direita">
            <Perfil nome="Catana" perfil="catanacomics" image="assets/icons/suggestions/catanacomics.svg" />
            <Sugestoes />
        </div>
    );
}