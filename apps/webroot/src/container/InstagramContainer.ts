import { connect } from 'react-redux';
import { Actions } from '../actions/Actions';
import Instagram from '../pages/Instagram';

const mapStateToProps = (state: any) => {
    return state
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        initMypage(value: any) {
            dispatch(Actions.Action1(value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Instagram);