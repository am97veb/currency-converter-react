
import { Imagin, LoadingText } from "./styled";
import loadingGif from "./loadingGif.gif";

export const LoadingMessage = () => (
    <>
        <LoadingText>Proszę czekać, trwa ładowanie danych⏳</LoadingText>
        <Imagin src={loadingGif} alt="ikona ładowania" />
    </>
);