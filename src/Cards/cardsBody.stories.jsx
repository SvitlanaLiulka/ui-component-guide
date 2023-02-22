import React from 'react';
import { Card } from 'react-bootstrap';
import { getComponentPropType } from '../utils/getComponentPropType';
import { CARDS_AS } from './const';

export default {
    title: 'Cards/CardsBody',
    component: Card.Body,
    argTypes: {
        as: {
            control: { type: 'select' },
            options: CARDS_AS,
            ...getComponentPropType('Set a custom element for this component', 'div'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card-body'),
        },
    },
};

const Template = args => (
    <Card>
        <Card.Body {...args}>This is some text within a card body.</Card.Body>
    </Card>
);

export const CardsBody = Template.bind({});
