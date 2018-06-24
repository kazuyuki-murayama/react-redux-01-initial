import React from 'react';

export default class CountComponent extends React.Component {
    render() {
        const { count } = this.props.state;
        return (
            <div>
                <span>count:{ count }</span>
                <br/>
                <button onClick={ () => {this.props.createCountUpAction(count)}}>up</button>
                <br/>
                <button onClick={ () => {this.props.createCountDownAction(count)}}>down</button>
            </div>
        );
    }
}
