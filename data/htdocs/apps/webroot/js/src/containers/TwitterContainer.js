import { connect } from 'react-redux';
import Action from '../actions/Action';
import Twitter from '../pages/Twitter';


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        registTwitterList(value) {
            dispatch(Action.registTwitterList(value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Twitter);