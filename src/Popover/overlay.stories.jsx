import React, { useRef, useState } from 'react';
import { Button, Overlay as OverlayComponent, Tooltip } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ANIMATION_TYPE, CLOSE_EVENT_TYPE, PLACEMENT_TYPE } from './const';

export default {
    title: 'Popover Components/Overlay',
    component: OverlayComponent,
    args: {
    },
    argTypes: {
        placement: {
            options: PLACEMENT_TYPE,
            control: { type: 'radio' },
            ...getComponentPropType(PLACEMENT_TYPE),
        },
        show: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        rootClose: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        rootCloseEvent: {
            control: CLOSE_EVENT_TYPE,
            ...getComponentPropType(CLOSE_EVENT_TYPE),
        },
        animation: {
            control: ANIMATION_TYPE,
            ...getComponentPropType(ANIMATION_TYPE),
        },
        onHide: {
            ...getComponentPropType('function'),
        },
        onEnter: {
            ...getComponentPropType('function'),
        },
        onEntering: {
            ...getComponentPropType('function'),
        },
        onEntered: {
            ...getComponentPropType('function'),
        },
        onExit: {
            ...getComponentPropType('function'),
        },
        onExiting: {
            ...getComponentPropType('function'),
        },
        onExited: {
            ...getComponentPropType('function'),
        },
        popperConfig: {
            ...getComponentPropType('object'),
        },
    },
};

const Template = (args) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>
            <Button
                ref={target}
                onClick={() => setShow(prevState => !prevState)}
            >
                Click me!
            </Button>
            <OverlayComponent {...args} target={target.current} show={show}>
                <Tooltip>Tooltip overload!</Tooltip>
            </OverlayComponent>
        </>
    );
};
export const Overlay = Template.bind({});
