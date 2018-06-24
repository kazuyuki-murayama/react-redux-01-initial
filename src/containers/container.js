import React from 'react';
import { connect } from 'react-redux';
import { createCountUpAction, createCountDownAction } from '../actions/countActionCreators';
import CountComponent from '../components/component';

function mapStateToProps(state) {
    return { state };
}
function mapDispatchToProps(dispatch) {
    return {
        createCountUpAction(count) {
            dispatch(createCountUpAction(count));
        },
        createCountDownAction(count) {
            dispatch(createCountDownAction(count));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CountComponent)