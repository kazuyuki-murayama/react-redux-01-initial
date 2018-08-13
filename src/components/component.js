import React from 'react';

export default class CountComponent extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <div>
                <span>count:{ count }</span>
                <br/>
                <button onClick={ () => {this.props.countUp(count)}}>up</button>
                <br/>
                <button onClick={ () => {this.props.countDown(count)}}>down</button>
            </div>
        );
    }
}
