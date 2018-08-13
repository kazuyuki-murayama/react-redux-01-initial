import { connect } from 'react-redux';
import { createCountUpAction, createCountDownAction } from '../actions/countActionCreators';
import CountComponent from '../components/component';

function mapStateToProps({ currentCount }) {
    return { currentCount };
}
function mapDispatchToProps(dispatch) {
    return {
        countUp(currentCount) {
            dispatch(createCountUpAction(currentCount));
        },
        countDown(currentCount) {
            dispatch(createCountDownAction(currentCount));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CountComponent)