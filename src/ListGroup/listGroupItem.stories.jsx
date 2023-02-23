import React from 'react';
import { ListGroup as ListGroupComponent } from 'react-bootstrap';
import { getComponentPropType } from '../utils/getComponentPropType';
import { LIST_AS, LIST_VARIANT } from './const';

export default {
    title: 'ListGroup/ListGroupItem',
    component: ListGroupComponent.Item,
    args: {
        variant: 'primary',
    },
    argTypes: {
        variant: {
            options: LIST_VARIANT,
            control: { type: 'radio' },
            ...getComponentPropType(LIST_VARIANT),
        },
        as: {
            control: { type: 'select' },
            options: LIST_AS,
            ...getComponentPropType(LIST_AS),
        },
        action: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        active: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        disabled: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        href: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        eventKey: {
            control: 'text',
            options: 'string | number',
            ...getComponentPropType('string | number'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'list-group-item'),
        },
        onClick: {
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (
    <ListGroupComponent>
        <ListGroupComponent.Item {...args}>Cras justo odio</ListGroupComponent.Item>
    </ListGroupComponent>
);

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
