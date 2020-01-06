import { connect } from 'react-redux';
import Action from '../actions/Action';
import { Navi } from '../components/Navi';


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeIconTwitter() {
            dispatch(Action.changeIconTwitter())
        },
        changeIconYoutube() {
            dispatch(Action.changeIconYoutube())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navi);