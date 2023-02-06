import React from 'react';
import { Accordion as AccordionComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { ACCORDION_AS } from './const';

export default {
    title: 'Accordion/AccordionHeader',
    component: AccordionComponent.Header,
    argTypes: {
        as: {
            control: { type: 'select' },
            options: ACCORDION_AS,
            ...getComponentPropType('Set a custom element for this component', 'h2'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'accordion-header'),
        },
        onClick: {
            ...getComponentPropType('function'),
        },
    },
};

const Template = args => (
    <AccordionComponent>
        <AccordionComponent.Item eventKey="0">
            <AccordionComponent.Header {...args}>Accordion Item</AccordionComponent.Header>
            <AccordionComponent.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </AccordionComponent.Body>
        </AccordionComponent.Item>
    </AccordionComponent>
);

export const AccordionHeader = Template.bind({});
