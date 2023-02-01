import React from 'react';
import { Col, Row } from '@paysera/react-common';
import { Container as ContainerComponent } from 'react-bootstrap';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { FLUID_TYPE } from '../const';

export default {
    title: 'Layout/Container',
    component: ContainerComponent,
    args: {
        fluid: true,
    },
    argTypes: {
        fluid: {
            control: 'text',
            ...getComponentPropType(FLUID_TYPE, true),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        as: {
            ...getComponentPropType('elementType'),
        },
    },
};

const Template = args => (
    <ContainerComponent {...args}>
        <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
            <Col sm={4}>sm=4</Col>
            <Col sm={4}>sm=4</Col>
            <Col sm={4}>sm=4</Col>
            <Col sm={12}>sm=12</Col>
        </Row>
    </ContainerComponent>
);

export const Container = Template.bind({});
