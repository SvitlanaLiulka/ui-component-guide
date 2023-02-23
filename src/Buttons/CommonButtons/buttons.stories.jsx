import React from 'react';
import { Button } from '@paysera/react-common';
import { BTN_SIZE_OPTIONS, BTN_STYLE_OPTIONS, BTN_TYPE_OPTIONS } from './const';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { CHILDREN_TYPE } from '../../const';

export default {
    title: 'Buttons/Common Buttons',
    component: Button,
    args: {
        variant: 'primary',
        active: false,
        children: 'Label',
        disabled: false,
    },
    argTypes: {
        variant: {
            options: BTN_STYLE_OPTIONS,
            ...getComponentPropType(BTN_STYLE_OPTIONS, 'primary'),
            control: { type: 'radio' },
        },
        onClick: {
            control: { disabled: true },
            ...getComponentPropType('function'),
        },
        children: {
            control: 'text',
            ...getComponentPropType(CHILDREN_TYPE),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'btn'),
        },
        size: {
            options: BTN_SIZE_OPTIONS,
            ...getComponentPropType(BTN_SIZE_OPTIONS),
            control: { type: 'radio' },
        },
        type: {
            options: BTN_TYPE_OPTIONS,
            ...getComponentPropType(BTN_TYPE_OPTIONS, 'button'),
            control: { type: 'radio' },
        },
        disabled: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        active: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        href: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => (<Button {...args} />);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});
export const Link = Template.bind({});
export const Dark = Template.bind({});
export const Light = Template.bind({});

Primary.args = {
    variant: 'primary',
};

Secondary.args = {
    variant: 'secondary',
};

Success.args = {
    variant: 'success',
};

Info.args = {
    variant: 'info',
};

Warning.args = {
    variant: 'warning',
};

Danger.args = {
    variant: 'danger',
};

Link.args = {
    variant: 'link',
};

Dark.args = {
    variant: 'dark',
};

Light.args = {
    variant: 'light',
};
