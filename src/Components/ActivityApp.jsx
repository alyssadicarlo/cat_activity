import Output from './../Containers/Output';
import PlayButton from './../Containers/PlayButton';
import EatButton from './../Containers/EatButton';
import NapButton from './../Containers/NapButton';
import NameForm from './../Containers/NameFormContainer';

const ActivityApp = () => {
    return (
        <div>
            <Output />
            <NameForm />
            <PlayButton />
            <EatButton />
            <NapButton />
        </div>
    );
}

export default ActivityApp;