import React from 'react';
import { Accordion as AccordionComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ACCORDION_AS, ACCORDION_KEYS } from './const';

export default {
    title: 'Accordion',
    component: AccordionComponent,
    args: {
        defaultActiveKey: '0',
    },
    argTypes: {
        activeKey: {
            control: ACCORDION_KEYS,
            ...getComponentPropType(ACCORDION_KEYS),
        },
        defaultActiveKey: {
            control: ACCORDION_KEYS,
            ...getComponentPropType(ACCORDION_KEYS, '0'),
        },
        alwaysOpen: {
            control: 'boolean',
            ...getComponentPropType('Allow accordion items to stay open when another item is opened'),
        },
        as: {
            control: { type: 'select' },
            options: ACCORDION_AS,
            ...getComponentPropType('Set a custom element for this component', 'h2'),
        },
        flush: {
            control: 'boolean',
            ...getComponentPropType('Renders accordion edge-to-edge with its parent container'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'accordion'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (
    <AccordionComponent {...args}>
        <AccordionComponent.Item eventKey="0">
            <AccordionComponent.Header>Accordion Item #1</AccordionComponent.Header>
            <AccordionComponent.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </AccordionComponent.Body>
        </AccordionComponent.Item>
        <AccordionComponent.Item eventKey="1">
            <AccordionComponent.Header>Accordion Item #2</AccordionComponent.Header>
            <AccordionComponent.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </AccordionComponent.Body>
        </AccordionComponent.Item>
    </AccordionComponent>
);

export const Accordion = Template.bind({});
