import { connect } from 'react-redux';
import { actionSetActivity } from './../actions';

const NapButton = (props) => (
    <button onClick={() => props.handleClick("napping")}>Nap</button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (activity) => {
            dispatch(actionSetActivity(activity));
        }
    }
}

export default connect(null, mapDispatchToProps)(NapButton);