import { connect } from 'react-redux';
import Action from '../actions/Action';
import Youtube from '../pages/Youtube';


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        registYoutubeList(value) {
            dispatch(Action.registYoutubeList(value))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Youtube);