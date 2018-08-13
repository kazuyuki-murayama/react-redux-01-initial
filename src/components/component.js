import React from 'react';

export default class CountComponent extends React.Component {
    render() {
        const { currentCount, countUp, countDown } = this.props;
        return (
            <React.Fragment>
                <pre>
                    <div>Count=[ { currentCount } ]</div><br/>

                    <button onClick={
                        () => {
                            countUp(currentCount)
                        }
                    }>Up</button>

                    <br/><br/>

                    <button onClick={
                        () => {
                            countDown(currentCount)
                        }
                    }>Down</button>
                </pre>
            </React.Fragment>
        );
    }
}
