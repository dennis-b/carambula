import React from 'react';
import { HomeComponent } from './HomeComponent';
import { Root } from './styled';

const HomeContainer = ({ location, match: { url } }: { location: any, match: any }) => (
    <Root>
        <HomeComponent />
    </Root>
);

export default HomeContainer;
