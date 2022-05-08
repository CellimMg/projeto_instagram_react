import AppBarIcon from "./AppBarIcon";

export default function AppBar() {

    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div class="menu-navegacao">
            <div>
                <div class="logo">
                    <div>
                        <ion-icon class="icon-logo hover-effect" name="logo-instagram"></ion-icon>
                    </div>
                    <div class="hover-effect"></div>
                </div>

                <div class="search-bar">Pesquisar</div>

                <div class="icons">
                    {icons.map(iconName => <AppBarIcon name={iconName} />)}
                </div>
            </div>
        </div>);
}
