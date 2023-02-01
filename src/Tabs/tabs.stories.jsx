import React from 'react';
import { Tab, Tabs as TabsComponent } from '@paysera/react-common';
import { CHILDREN_TYPE } from '../const';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ANIMATION_TYPE, TABS_ID_OPTIONS, TABS_STYLE_OPTIONS } from './const/const';

export default {
    title: 'Tabs Components/Tabs',
    component: TabsComponent,
    args: {
        variant: 'pills',
    },
    argTypes: {
        defaultActiveKey: {
            control: 'number',
            ...getComponentPropType('number', 1),
        },
        activeKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        variant: {
            options: TABS_STYLE_OPTIONS,
            ...getComponentPropType(TABS_STYLE_OPTIONS, 'pills'),
            control: { type: 'radio' },
        },
        mountOnEnter: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        justify: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        fill: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        unmountOnExit: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        id: {
            ...getComponentPropType(TABS_ID_OPTIONS),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        children: {
            control: CHILDREN_TYPE,
            ...getComponentPropType(CHILDREN_TYPE),
        },
        transition: {
            control: ANIMATION_TYPE,
            ...getComponentPropType(ANIMATION_TYPE, true),
        },
    },
};

const Template = args => (
    <TabsComponent {...args}>
        <Tab eventKey={1} title="Tab 1">
            Tab 1 content
        </Tab>
        <Tab eventKey={2} title="Tab 2">
            Tab 2 content
        </Tab>
        <Tab eventKey={3} title="Tab 3">
            Tab 3 content
        </Tab>
    </TabsComponent>

);

export const Tabs = Template.bind({});
