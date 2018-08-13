import { connect } from 'react-redux';
import { createCountUpAction, createCountDownAction } from '../actions/countActionCreators';
import CountComponent from '../components/component';

function mapStateToProps({ count }) {
    return { count };
}
function mapDispatchToProps(dispatch) {
    return {
        countUp(count) {
            dispatch(createCountUpAction(count));
        },
        countDown(count) {
            dispatch(createCountDownAction(count));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CountComponent)