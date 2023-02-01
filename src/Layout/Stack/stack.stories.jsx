import React from 'react';
import { Stack as StackComponent } from 'react-bootstrap';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { DIRECTION_TYPE } from '../const';

export default {
    title: 'Layout/Stack',
    component: StackComponent,
    args: {
        bsPrefix: 'vstack',
        gap: 3,
    },
    argTypes: {
        bsPrefix: {
            control: { type: 'radio' },
            options: DIRECTION_TYPE,
            ...getComponentPropType(DIRECTION_TYPE),
        },
        gap: {
            control: 'number',
            ...getComponentPropType('number'),
        },
    },
};

const Template = args => (
    <StackComponent {...args}>
        <div>First item</div>
        <div>Second item</div>
        <div>Third item</div>
    </StackComponent>
);

export const Stack = Template.bind({});
