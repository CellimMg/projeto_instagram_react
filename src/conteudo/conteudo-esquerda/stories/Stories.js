import Story from "./Story";

export default function Stories(props) {
    const stories = [
        { image: "assets/icons/story/9gag.svg", title: "9gag" },
        { image: "assets/icons/story/meowed.svg", title: "meowed" },
        { image: "assets/icons/story/barked.svg", title: "barked" },
        { image: "assets/icons/story/nathanwpylestrangeplanet.svg", title: "nathanwpylestrangeplanet" },
        { image: "assets/icons/story/wawawiwacomicsa.svg", title: "wawawiwacomicsa" },
        { image: "assets/icons/story/respondeai.svg", title: "respondeai" },
        { image: "assets/icons/story/filomoderna.svg", title: "filomoderna" },
        { image: "assets/icons/story/memeriagourmet.svg", title: "memeriagourmet" },
    ];

    return (
        <div class="stories">

            {stories.map(story => <Story image={story.image} title={story.title} />)}

            <img class="icon-arrow hover-effect" src="assets/icons/story/icon-arrow.svg" />
        </div>
    );
} 