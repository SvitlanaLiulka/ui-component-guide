import React from 'react';
import { Accordion as AccordionComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ACCORDION_KEYS } from './const';

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
            ...getComponentPropType('boolean'),
        },
        as: {
            control: 'elementType',
            ...getComponentPropType('elementType'),
        },
        flush: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string'),
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
