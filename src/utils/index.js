import {AudioPlayer} from "react-game-kit";
import MenuSelect from "../assets/sound/MenuSelect.wav"

export const menuSelectAudio = () => {
    return new AudioPlayer(MenuSelect);
}