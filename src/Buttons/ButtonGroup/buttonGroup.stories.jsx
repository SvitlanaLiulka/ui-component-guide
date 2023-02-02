import React from 'react';
import { Button, ButtonGroup as ButtonGroupComponent } from '@paysera/react-common';
import { BTN_AS, BTN_SIZE_OPTIONS } from '../CommonButtons/const';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: 'Buttons',
    component: ButtonGroupComponent,
    argTypes: {
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'btn-group'),
        },
        role: {
            control: 'text',
            ...getComponentPropType('string', 'group'),
        },
        size: {
            options: BTN_SIZE_OPTIONS,
            ...getComponentPropType(BTN_SIZE_OPTIONS),
            control: { type: 'radio' },
        },
        vertical: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        as: {
            control: { type: 'select' },
            options: BTN_AS,
            ...getComponentPropType(BTN_AS),
        },
    },
};
const Template = args => (
    <ButtonGroupComponent {...args}>
        <Button variant="outline-success">Left</Button>
        <Button variant="outline-success">Middle</Button>
        <Button variant="outline-success">Right</Button>
    </ButtonGroupComponent>
);

export const ButtonGroup = Template.bind({});
