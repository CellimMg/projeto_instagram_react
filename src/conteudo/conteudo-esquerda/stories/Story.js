export default function Story(props) {
    return (
        <div class="story">
            <div>
                <img class="background" src="assets/images/stories_background.jpg" />
                <img class="hover-effect" src={props.image} />
            </div>
            <span class="hover-effect">{props.title}</span>
        </div>
    );
}
