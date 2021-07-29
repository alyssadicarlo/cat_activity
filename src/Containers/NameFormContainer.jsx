import NameForm from '../Components/NameForm';
import { actionSetName } from './../actions';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (event, name) => {
            event.preventDefault();
            dispatch(actionSetName(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(NameForm);

