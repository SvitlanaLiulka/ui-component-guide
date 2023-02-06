import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { getComponentPropType } from '../utils/getComponentPropType';
import image from './example_img.svg';

export default {
    title: 'Cards/CardsGroup',
    component: CardGroup,
    argTypes: {
        as: {
            ...getComponentPropType('Set a custom element for this component', 'div'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card-group'),
        },
    },
};

const Template = args => (
    <CardGroup {...args}>
        <Card>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>Last updated 3 mins ago</Card.Footer>
        </Card>
        <Card>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                    {' '}
                </Card.Text>
            </Card.Body>
            <Card.Footer>Last updated 3 mins ago</Card.Footer>
        </Card>
        <Card>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
            </Card.Body>
            <Card.Footer>Last updated 3 mins ago</Card.Footer>
        </Card>
    </CardGroup>
);

export const CardsGroup = Template.bind({});
