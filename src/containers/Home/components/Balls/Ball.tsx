import { StyledBall } from 'containers/Home/components/styled';
import { useInterval } from 'hooks';
import * as React from 'react';
import { useRef, useState } from 'react';


const getBgColor = ({ isMax, isMin }) => isMax ? '#E0735D' : isMin ? '#7F9B43' : '#F4C214'

export function Ball({ x, y, xDiff, onPosChange, id, isMax, isMin }) {

    const [ballPosition, setBallPosition] = useState(x)
    const delta = useRef(1);


    useInterval(() => {
        if (ballPosition + xDiff >= 690) {
            delta.current = -1;
        }
        if (ballPosition - xDiff / 2 <= 5) {
            delta.current = 1
        }
        const value = ballPosition + (xDiff * delta.current);
        onPosChange({ id, pos: value })
        setTimeout(() => setBallPosition(value), 10)

    }, 500);

    const style = {
        backgroundColor: getBgColor({ isMax, isMin }),
        transform: `translate3d(${ballPosition}px,0,0)`,
        transition: 'all .5s linear'
    };

    return (
        <div>
            <StyledBall y={y} style={style} />
        </div>

    )
}
