import React from 'react';
import { Card as CardComponent } from 'react-bootstrap';
import { Button } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { CARDS_AS, CARDS_STYLE_OPTIONS, CARDS_STYLE_TEXT } from './const';
import image from './example_img.svg';

export default {
    title: 'Cards/Card',
    component: CardComponent,
    argTypes: {
        as: {
            control: { type: 'select' },
            options: CARDS_AS,
            ...getComponentPropType('Set a custom element for this component', 'div'),
        },
        bg: {
            control: { type: 'select' },
            options: CARDS_STYLE_OPTIONS,
            ...getComponentPropType(CARDS_STYLE_OPTIONS),
        },
        body: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        border: {
            control: { type: 'select' },
            options: CARDS_STYLE_OPTIONS,
            ...getComponentPropType(CARDS_STYLE_OPTIONS),
        },
        text: {
            control: { type: 'select' },
            options: CARDS_STYLE_TEXT,
            ...getComponentPropType(CARDS_STYLE_TEXT),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card'),
        },
    },
};

const Template = args => (
    <CardComponent {...args}>
        <CardComponent.Img variant="top" src={image} />
        <CardComponent.Body>
            <CardComponent.Title>Card Title</CardComponent.Title>
            <CardComponent.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
            </CardComponent.Text>
            <Button variant="primary">Go somewhere</Button>
        </CardComponent.Body>
    </CardComponent>
);

export const Card = Template.bind({});
