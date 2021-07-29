import { connect } from 'react-redux';
import { actionSetActivity } from './../actions';

const EatButton = (props) => (
    <button onClick={() => props.handleClick("eating")}>Eat</button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (activity) => {
            dispatch(actionSetActivity(activity));
        }
    }
}

export default connect(null, mapDispatchToProps)(EatButton);