import { connect } from 'react-redux';
import Action from '../actions/Action';
import Home from '../pages/Home';


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        init(value) {
            dispatch(Action.init(value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);