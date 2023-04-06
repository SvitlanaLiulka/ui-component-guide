import React from 'react';
import { Nav as NavComponent, NavItem, NavLink } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { NAV_STYLE_OPTIONS, NAV_ALIGN_OPTIONS } from './const';

export default {
    title: 'Navs/Nav',
    component: NavComponent,
    args: {
        variant: 'tabs',
        className: '',
        bsPrefix: 'nav',
    },
    argTypes: {
        variant: {
            options: NAV_STYLE_OPTIONS,
            ...getComponentPropType(NAV_STYLE_OPTIONS, 'tabs'),
            control: { type: 'radio' },
        },
        activeKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        className: {
            name: 'alignment and orientation',
            type: { name: 'string', required: false },
            description: 'controled by className',
            options: NAV_ALIGN_OPTIONS,
            ...getComponentPropType(NAV_ALIGN_OPTIONS, NAV_ALIGN_OPTIONS[0]),
            control: {
                type: 'radio',
            },
        },
        justify: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        fill: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        navbar: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        role: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'nav'),
        },
    },
};

const Template = args => (
    <NavComponent {...args}>
        <NavItem>
            <NavLink eventKey={1} title="Item" href="/home">
                NavItem 1 content
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink eventKey={2} title="Item">
                NavItem 2 content
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink eventKey={3} disabled>
                NavItem 3 content
            </NavLink>
        </NavItem>
    </NavComponent>
);

export const Nav = Template.bind({});
