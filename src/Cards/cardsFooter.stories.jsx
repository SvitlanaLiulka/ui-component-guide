import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { CARDS_AS } from './const';

export default {
    title: 'Cards/CardsFooter',
    component: Card.Footer,
    argTypes: {
        as: {
            control: { type: 'select' },
            options: CARDS_AS,
            ...getComponentPropType('Set a custom element for this component', 'div'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card-footer'),
        },
    },
};

const Template = args => (
    <Card>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer {...args}>Cards Footer</Card.Footer>
    </Card>
);

export const CardsFooter = Template.bind({});
