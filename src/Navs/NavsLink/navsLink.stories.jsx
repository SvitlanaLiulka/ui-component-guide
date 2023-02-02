import React from 'react';
import { Nav, NavItem, NavLink as NavLinkComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: 'Navs/NavLink',
    component: NavLinkComponent,
    args: {
        bsPrefix: 'nav-link',
    },
    argTypes: {
        eventKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        as: {
            control: 'text',
            type: { name: 'string', required: false },
            description: 'You can use a custom element type for this component',
            ...getComponentPropType('string', 'a'),
        },
        active: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        disabled: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        href: {
            control: 'text',
            ...getComponentPropType('string', ''),
        },
        role: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        onClick: {
            ...getComponentPropType('function'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'nav-link'),
        },
    },
};

const Template = args => (
    <Nav activeKey={1}>
        <NavItem>
            <NavLinkComponent {...args} eventKey={1}>
                NavLink content
            </NavLinkComponent>
        </NavItem>
    </Nav>
);

export const NavLink = Template.bind({});
