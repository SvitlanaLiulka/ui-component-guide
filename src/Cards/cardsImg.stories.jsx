import React from 'react';
import { Card } from 'react-bootstrap';
import { getComponentPropType } from '../utils/getComponentPropType';
import image from './example_img.svg';
import { CARDS_IMG_VARIANT } from './const';

export default {
    title: 'Cards/CardImg',
    component: Card.Img,
    args: {
        variant: 'top',
    },
    argTypes: {
        as: {
            description: 'Set a custom element for this component',
            ...getComponentPropType('string', 'img'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'card-img'),
        },
        variant: {
            control: { type: 'select' },
            options: CARDS_IMG_VARIANT,
            ...getComponentPropType(CARDS_IMG_VARIANT),
        },
    },
};

const Template = args => (
    <Card>
        <Card.Img {...args} src={image} />
        <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
            </Card.Text>
        </Card.Body>
    </Card>
);

export const CardImg = Template.bind({});
