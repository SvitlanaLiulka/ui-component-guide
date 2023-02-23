import React from 'react';
import { Card } from 'react-bootstrap';
import { getComponentPropType } from '../utils/getComponentPropType';
import image from './example_img.svg';
import { CARDS_AS } from './const';

export default {
    title: 'Cards/CardImgOverlay',
    component: Card.ImgOverlay,
    argTypes: {
        as: {
            control: { type: 'select' },
            options: CARDS_AS,
            ...getComponentPropType('Set a custom element for this component', 'div'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card-img-overlay'),
        },
    },
};

const Template = args => (
    <Card>
        <Card.Img src={image} />
        <Card.ImgOverlay {...args}>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </Card.Text>
        </Card.ImgOverlay>
    </Card>
);

export const CardImgOverlay = Template.bind({});
