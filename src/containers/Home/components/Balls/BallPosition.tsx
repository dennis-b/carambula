import { Ball } from 'containers/Home/components/Balls/Ball';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { default as React, PureComponent } from 'react';
import { AppStore, appStoreSelector } from '../../../../app/AppStore';

interface BallPositionProps {
    x: number
    y: number
    id: string
    xDiff: number
    appStore?: AppStore
}

@inject(appStoreSelector)
@observer
export class BallPosition extends PureComponent<BallPositionProps> {

    onPosChange = ({ id, pos }) => {
        const { appStore } = this.props
        appStore.updatePosition({ id, pos })
    }

    render() {
        const { x, y, xDiff, appStore, id } = this.props
        const positions = toJS(appStore.positions);
        const max = Math.max.apply(null, Object.values(positions));
        const min = Math.min.apply(null, Object.values(positions))
        return (
            <Ball
                onPosChange={this.onPosChange}
                x={x}
                y={y}
                id={id}
                xDiff={xDiff}
                isMax={positions[id] === max}
                isMin={positions[id] === min}
            />
        )

    }
}
