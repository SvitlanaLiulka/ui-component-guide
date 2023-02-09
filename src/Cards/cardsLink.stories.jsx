import React from 'react';
import { Card } from 'react-bootstrap';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Cards/CardsLink',
    component: Card.Link,
    argTypes: {
        as: {
            ...getComponentPropType('Set a custom element for this component', 'a'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card-link'),
        },
    },
};

const Template = args => (
    <Card>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle>Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
            </Card.Text>
            <Card.Link {...args} href="#">Card Link</Card.Link>
        </Card.Body>
    </Card>
);

export const CardsLink = Template.bind({});
