import React from 'react';
import { Accordion as AccordionComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ACCORDION_AS } from './const';

export default {
    title: 'Accordion/Accordion Body',
    component: AccordionComponent.Body,
    argTypes: {
        as: {
            control: { type: 'select' },
            options: ACCORDION_AS,
            ...getComponentPropType('Set a custom element for this component', 'div'),
        },
        onEnter: {
            ...getComponentPropType('function'),
            description: 'Callback fired before the component expands',
        },
        onEntered: {
            ...getComponentPropType('function'),
            description: 'Callback fired after the component has expanded',
        },
        onEntering: {
            ...getComponentPropType('function'),
            description: 'Callback fired after the component starts to expand',
        },
        onExit: {
            ...getComponentPropType('function'),
            description: 'Callback fired before the component collapses',
        },
        onExited: {
            ...getComponentPropType('function'),
            description: 'Callback fired after the Modal finishes transitioning out',
        },
        onExiting: {
            ...getComponentPropType('function'),
            description: 'Callback fired after the component starts to collapse',
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'accordion-body'),
        },
    },
};

const Template = args => (
    <AccordionComponent>
        <AccordionComponent.Item eventKey="0">
            <AccordionComponent.Header>Accordion Item #1</AccordionComponent.Header>
            <AccordionComponent.Body {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </AccordionComponent.Body>
        </AccordionComponent.Item>
        <AccordionComponent.Item eventKey="1">
            <AccordionComponent.Header>Accordion Item #2</AccordionComponent.Header>
            <AccordionComponent.Body {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </AccordionComponent.Body>
        </AccordionComponent.Item>
    </AccordionComponent>
);

export const AccordionBody = Template.bind({});
