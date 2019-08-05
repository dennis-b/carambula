import { FloatingCard } from 'common';
import { UserInputForm } from 'containers/Home/components';
import { Balls } from 'containers/Home/components/Balls/Balls';
import { Fade } from 'containers/Home/components/Fade';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { AppStore, appStoreSelector } from '../../app/AppStore';


import { BallsContainer, GameContainer, HeaderContainer } from './styled';

@inject(appStoreSelector)
@observer
export class HomeComponent extends Component<{ appStore?: AppStore }> {

    state = {
        numberOfBalls: 0,
        reRun: null,
    };

    onSubmit = ({ numberOfBalls }) => {
        this.setState({ numberOfBalls, reRun: Date.now() })
    };

    render() {
        const { numberOfBalls, reRun } = this.state;
        const { appStore } = this.props;
        return (
            <FloatingCard>
                <GameContainer>
                    <HeaderContainer>
                        <Fade>
                            <UserInputForm onSubmit={this.onSubmit} />
                        </Fade>
                    </HeaderContainer>
                    <BallsContainer>
                        <Balls numberOfBalls={numberOfBalls} reRun={reRun} appStore={appStore} />
                    </BallsContainer>
                </GameContainer>
            </FloatingCard>
        )
    }
}
