import { connect } from 'react-redux';
import { actionSetActivity } from './../actions';

const PlayButton = (props) => (
        <button onClick={() => props.handleClick("playing")}>Play</button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (activity) => {
            dispatch(actionSetActivity(activity));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayButton);