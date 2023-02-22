import React from 'react';
import { Alert as AlertComponent } from '@paysera/react-common';
import { ALERT_AS } from './const';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Alert/AlertHeading',
    component: AlertComponent.Heading,
    argTypes: {
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'alert-heading'),
        },
        as: {
            control: { type: 'select' },
            options: ALERT_AS,
            ...getComponentPropType(ALERT_AS),
        },
    },
};

const Template = args => (
    <AlertComponent variant='primary'>
        <AlertComponent.Heading {...args}>
            Alert Heading
        </AlertComponent.Heading>
        <hr />
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
    </AlertComponent>
);

export const AlertHeading = Template.bind({});
