import { connect } from 'react-redux';
import Action from '../actions/Action';
import Home from '../pages/Home';


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        registResultJson(value) {
            dispatch(Action.registResultJson(value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);