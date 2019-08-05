import React from 'react';
import { animated, useSpring } from 'react-spring';


export const Fade = ({ children }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } })
    return (
        <animated.div style={props}>{children}</animated.div>
    )
}
