import NameForm from '../Components/NameForm';
import { actionSetName } from './../actions';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (name) => {
            dispatch(actionSetName(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(NameForm);

