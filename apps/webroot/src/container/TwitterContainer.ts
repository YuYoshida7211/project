import { connect } from 'react-redux';
import { Actions } from '../actions/Actions';
import Twitter from '../pages/Twitter';

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
export default connect(mapStateToProps, mapDispatchToProps)(Twitter);