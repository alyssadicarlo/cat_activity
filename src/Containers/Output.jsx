import { connect } from "react-redux";

const Output = props => (
    <div>
        <h3>
            {props.name} is {props.activity}.
        </h3>
    </div>
);

function mapStateToProps(state) {
    return {
        name: state.name,
        activity: state.activity
    }
}

export default connect(mapStateToProps)(Output);