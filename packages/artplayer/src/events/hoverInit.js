import { addClass, removeClass } from '../utils';

export default function hoverInit(art, events) {
    const { $player } = art.template;

    events.hover(
        $player,
        () => {
            art.emit('hover', true);
        },
        () => {
            art.emit('hover', false);
        },
    );
}
