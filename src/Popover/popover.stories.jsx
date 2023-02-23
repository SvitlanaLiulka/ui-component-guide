import React from 'react';
import { Popover as PopoverComponent, OverlayTrigger, Button } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ANIMATION_TYPE, PLACEMENT_TYPE } from './const';

export default {
    title: 'Popover Components/Popover',
    component: PopoverComponent,
    argTypes: {
        arrowProps: {
            ...getComponentPropType('{ ref: ReactRef, style: Object }'),
        },
        body: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        id: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        placement: {
            control: { type: 'radio' },
            options: PLACEMENT_TYPE,
            ...getComponentPropType(PLACEMENT_TYPE),
        },
        popper: {
            ...getComponentPropType('object'),
        },
        show: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        transition: {
            ...getComponentPropType(ANIMATION_TYPE),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => (
    <>
        <OverlayTrigger
            trigger="click"
            overlay={(
                <PopoverComponent {...args}>
                    <PopoverComponent.Header as="h3">Popover</PopoverComponent.Header>
                    <PopoverComponent.Body>
                        And here is some amazing content. Its very engaging
                    </PopoverComponent.Body>
                </PopoverComponent>
              )}
        >
            <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
    </>
);

export const Popover = Template.bind({});
