import React from 'react';
import {
    Button, ButtonToolbar, OverlayTrigger as OverlayTriggerComponent, Tooltip,
} from '@paysera/react-common';
import {TYPE, PLACEMENT_TYPE, TRIGGER_TYPE, DELAY_TYPE} from './const';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Popover Components/OverlayTrigger',
    component: OverlayTriggerComponent,
    args: {
        trigger: 'hover',
        delay: { show: 250, hide: 400 },
        placement: 'bottom',
        children: <Button>Trigger</Button>,
        overlay: <Tooltip>Holy guacamole!</Tooltip>,
    },
    argTypes: {
        children: {
            ...getComponentPropType(TYPE),
        },
        defaultShow: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        flip: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        delay: {
            ...getComponentPropType(DELAY_TYPE),
        },
        overlay: {
            ...getComponentPropType(TYPE),
        },
        onToggle: {
            ...getComponentPropType('function'),
        },
        onHide: {
            ...getComponentPropType('null'),
        },
        target: {
            ...getComponentPropType('null'),
        },
        popperConfig: {
            ...getComponentPropType('object'),
        },
        placement: {
            control: { type: 'radio' },
            options: PLACEMENT_TYPE,
            ...getComponentPropType(PLACEMENT_TYPE),
        },
        show: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        trigger: {
            control: { type: 'radio' },
            options: TRIGGER_TYPE,
            ...getComponentPropType(TRIGGER_TYPE),
        },
    },
};

const Template = args => (
    <ButtonToolbar>
        <OverlayTriggerComponent {...args} />
    </ButtonToolbar>
);

export const OverlayTrigger = Template.bind({});
