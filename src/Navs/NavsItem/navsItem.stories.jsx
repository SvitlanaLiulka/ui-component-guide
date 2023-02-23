import React from 'react';
import { Nav, NavItem as NavItemComponent, NavLink } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';

export default {
    title: 'Navs/NavItem',
    component: NavItemComponent,
    args: {
        bsPrefix: 'nav-item',
    },
    argTypes: {
        as: {
            control: 'text',
            type: { name: 'string', required: false },
            description: 'You can use a custom element type for this component.',
            ...getComponentPropType('string', 'div'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'nav-item'),
        },
    },
};

const Template = args => (
    <Nav activeKey={1}>
        <NavItemComponent {...args}>
            <NavLink eventKey={1}>
                NavItemComponent 1 content
            </NavLink>
        </NavItemComponent>
    </Nav>
);

export const NavItem = Template.bind({});
