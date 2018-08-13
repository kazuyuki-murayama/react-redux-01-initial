import React from 'react';

export default class CountComponent extends React.Component {
    render() {
        const { currentCount } = this.props;
        return (
            <div>
                <span>count:{ currentCount }</span>
                <br/>
                <button onClick={ () => {this.props.countUp(currentCount)}}>up</button>
                <br/>
                <button onClick={ () => {this.props.countDown(currentCount)}}>down</button>
            </div>
        );
    }
}
