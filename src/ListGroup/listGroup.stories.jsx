import React from 'react';
import { ListGroup as ListGroupComponent } from 'react-bootstrap';
import { getComponentPropType } from '../utils/getComponentPropType';
import { LIST_AS, LIST_HORIZONTAL } from './const';

export default {
    title: 'ListGroup/ListGroup',
    component: ListGroupComponent,
    args: {
        numbered: true,
        horizontal: true,
    },
    argTypes: {
        horizontal: {
            options: LIST_HORIZONTAL,
            control: { type: 'select' },
            ...getComponentPropType(LIST_HORIZONTAL),
        },
        as: {
            control: { type: 'select' },
            options: LIST_AS,
            ...getComponentPropType(LIST_AS),
        },
        numbered: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'list-group'),
        },
        variant: {
            ...getComponentPropType('flush'),
        },
    },
};

const Template = args => (
    <ListGroupComponent {...args}>
        <ListGroupComponent.Item>Cras justo odio</ListGroupComponent.Item>
        <ListGroupComponent.Item>Dapibus ac facilisis in</ListGroupComponent.Item>
        <ListGroupComponent.Item>Morbi leo risus</ListGroupComponent.Item>
        <ListGroupComponent.Item>Vestibulum at eros</ListGroupComponent.Item>
    </ListGroupComponent>
);

export const ListGroup = Template.bind({});
