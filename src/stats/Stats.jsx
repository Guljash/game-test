import React from 'react';

const Stats = (props) => {
        return (
            <div className="stats">
                <div>{props.name}: {props.player}</div>
                <div>Computer: {props.computer}</div>
                {props.winner}
            </div>
        )
}

export default Stats;
