import { BallPosition } from 'containers/Home/components/Balls/BallPosition';
import { StyledBalls } from 'containers/Home/components/styled';
import * as React from 'react';
import { useEffect, useState } from 'react';
import useDimensions from "react-use-dimensions";
import { getRandomArbitrary } from 'utils/utils';


export function Balls({ numberOfBalls, reRun, appStore }) {

    const [ballsData, setBalls] = useState([])
    const [ref, {}] = useDimensions();

    useEffect(() => {

        const diff = Math.abs(numberOfBalls - appStore.ballsArray.length)

        if (numberOfBalls > appStore.ballsArray.length) {
            for (let i = 0; i < diff; i++) {
                const id = `${Date.now()}-${i}`;
                appStore.addBall({
                    [id]: {
                        x: getRandomArbitrary(5, 600),
                        y: 10,
                        id
                    }
                })
            }
        } else if (numberOfBalls < appStore.ballsArray.length) {
            appStore.removeBalls(diff)
        }

        setBalls(appStore.ballsArray)

    }, [reRun])


    return (
        <StyledBalls ref={ref}>
            {ballsData.map(({ x, y, xDiff, id }) =>
                <BallPosition
                    key={id}
                    id={id}
                    x={x}
                    y={y}
                    xDiff={xDiff}
                />
            )}
        </StyledBalls>

    )
}
