import React from 'react';
import { HelpBlock as HelpBlockComponent, Form, FormGroup } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import withReduxForm from '../utils/withReduxForm';

HelpBlockComponent.displayName = 'HelpBlock';

export default {
    title: 'Help Block/HelpBlock',
    component: HelpBlockComponent,
    decorators: [
        withReduxForm,
    ],
    args: {
        children: 'HelpBlock',
    },
    argTypes: {
        children: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        className: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => (
    <Form>
        <FormGroup placeholder='Test' />
        <HelpBlockComponent {...args} />
    </Form>
);

export const HelpBlock = Template.bind({});
