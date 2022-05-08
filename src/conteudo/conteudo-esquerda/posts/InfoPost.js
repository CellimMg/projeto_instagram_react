export default function InfoPost(props) {


    return (
        <div class="informacoes-postagem">
            <div>
                <div>
                    <ion-icon onClick={props.click} style={{ color: props.like ? "red" : "black" }} class="hover-effect" name={props.like ? "heart" : "heart-outline"}></ion-icon>
                    <ion-icon class="hover-effect" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="hover-effect" name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon class="hover-effect" name="bookmark-outline"></ion-icon>
            </div>
            <div>
                <img class="hover-effect" src="assets/icons/suggestions/adorableanimals.svg" alt="" />
                <p>Curtido por <span class="hover-effect">{props.curtidoPor}</span> e outras <span
                    class="hover-effect">{props.qtdCurtidas} pessoas</span></p>
            </div>
        </div>
    );
}