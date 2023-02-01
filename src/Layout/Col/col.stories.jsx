import React from 'react';
import { Col as ColComponent, Row } from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { LAYOUT_TYPE } from '../const';

export default {
    title: 'Layout/Col',
    component: ColComponent,
    args: {
        xs: 12,
        md: 8,
    },
    argTypes: {
        as: {
            ...getComponentPropType('elementType'),
        },
        lg: {
            control: 'number',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        md: {
            control: 'number',
            ...getComponentPropType(LAYOUT_TYPE, 8),
        },
        sm: {
            control: 'number',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        xl: {
            control: 'number',
            ...getComponentPropType(LAYOUT_TYPE),
        },
        xs: {
            control: 'number',
            ...getComponentPropType(LAYOUT_TYPE, 12),
        },
        xxl: {
            control: 'number',
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
        <Row>
            <ColComponent {...args}>
                xs=12 md=8
            </ColComponent>
            <ColComponent {...args}>
                xs=12 md=8
            </ColComponent>
        </Row>
    </>
);

export const Col = Template.bind({});
