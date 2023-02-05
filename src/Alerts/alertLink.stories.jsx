import React from 'react';
import { Alert as AlertComponent } from '@paysera/react-common';
import { ALERT_AS } from './const';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Alert/AlertLink',
    component: AlertComponent.Link,
    argTypes: {
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'alert-link'),
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
        This is a primary alert with
        <AlertComponent.Link {...args}>
            {' '}
            an example link
        </AlertComponent.Link>
        {' '}
        Give it a click if you like.
    </AlertComponent>
);

export const AlertLink = Template.bind({});
