import React from 'react';
import { Alert as AlertComponent } from '@paysera/react-common';
import { ALERT_VARIANT } from './const';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Alert',
    component: AlertComponent,
    args: {
        variant: 'primary',
    },
    argTypes: {
        closeLabel: {
            control: 'text',
            ...getComponentPropType('string', 'Close alert'),
        },
        closeVariant: {
            control: 'text',
            ...getComponentPropType('white'),
        },
        dismissible: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        onClose: {
            ...getComponentPropType('function'),
        },
        show: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        transition: {
            control: { type: 'select' },
            options: 'boolean | elementType',
            ...getComponentPropType('elementType', 'Fade'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        variant: {
            options: ALERT_VARIANT,
            control: { type: 'radio' },
            ...getComponentPropType(ALERT_VARIANT, 'primary'),
        },
    },
};

const Template = args => <AlertComponent {...args}>This is a alert — check it out!</AlertComponent>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
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

Danger.args = {
    variant: 'danger',
};

Warning.args = {
    variant: 'warning',
};

Info.args = {
    variant: 'info',
};

Dark.args = {
    variant: 'dark',
};

Light.args = {
    variant: 'light',
};
