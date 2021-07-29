import Output from './../Containers/Output';
import PlayButton from './../Containers/PlayButton';
import EatButton from './../Containers/EatButton';
import NapButton from './../Containers/NapButton';

const ActivityApp = () => {
    return (
        <div>
            <Output />
            <PlayButton />
            <EatButton />
            <NapButton />
        </div>
    );
}

export default ActivityApp;