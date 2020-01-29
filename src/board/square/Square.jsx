import React from 'react';
import { Rect, Text, Stage, Layer } from 'react-konva';

const Square = (props) => {
    return (
        <Stage width={105} height={105}>
            <Layer>
                <Rect
                    width={100}
                    height={100}
                    fill="#2e9ef6"
                    shadowBlur={5}
                    onClick={props.onClick}
                />
                <Text
                    text={props.value}
                    fill='#fff'
                    x={30}
                    y={30}
                    fontSize={60}
                />
            </Layer>
        </Stage>
    );
}

export default Square;

