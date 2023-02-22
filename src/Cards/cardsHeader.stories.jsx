import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { CARDS_AS } from './const';

export default {
    title: 'Cards/CardsHeader',
    component: Card.Header,
    argTypes: {
        as: {
            control: { type: 'select' },
            options: CARDS_AS,
            ...getComponentPropType('Set a custom element for this component', 'div'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card-header'),
        },
    },
};

const Template = args => (
    <Card>
        <Card.Header {...args}>Cards Header</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
);

export const CardsHeader = Template.bind({});
