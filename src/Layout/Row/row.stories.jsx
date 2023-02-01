import React from 'react';
import { Col, Row as RowComponent } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { LAYOUT_TYPE } from '../const';

export default {
    title: 'Layout/Row',
    component: RowComponent,
    argTypes: {
        as: {
            ...getComponentPropType('elementType'),
        },
        lg: {
            control: 'text',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        md: {
            control: 'text',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        sm: {
            control: 'text',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        xl: {
            control: 'text',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        xs: {
            control: 'text',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        xxl: {
            control: 'text',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        bsPrefix: {
            control: 'text',
            options: 'row | col',
            ...getComponentPropType('row | col'),
        },
    },
};

const Template = args => (
    <>
        <RowComponent {...args}>
            <Col xs={12} md={8}>
                xs=12 md=8
            </Col>
            <Col xs={6} md={4}>
                xs=6 md=4
            </Col>
        </RowComponent>
        <RowComponent {...args}>
            <Col md={4}>
                md=4
            </Col>
        </RowComponent>
    </>
);

export const Row = Template.bind({});
