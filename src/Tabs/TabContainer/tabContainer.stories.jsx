import React from 'react';
import {
    Tab, Nav, Row, Col,
} from '@paysera/react-common';
import { getComponentPropType } from '../../utils/getComponentPropType';
import { ANIMATION_TYPE, TABS_ID_OPTIONS } from '../const/const';

export default {
    title: 'Tabs Components/TabContainer',
    component: Tab.Container,
    args: {
        defaultActiveKey: 'first',
    },
    argTypes: {
        id: {
            ...getComponentPropType(TABS_ID_OPTIONS),
        },
        defaultActiveKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        activeKey: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        onSelect: {
            ...getComponentPropType('function'),
        },
        generateChildId: {
            ...getComponentPropType('function'),
        },
        mountOnEnter: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        unmountOnExit: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        transition: {
            control: ANIMATION_TYPE,
            ...getComponentPropType(ANIMATION_TYPE),
        },
    },
};

const Template = args => (
    <Tab.Container {...args}>
        <Row>
            <Col sm={3}>
                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        first
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        second
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
);

export const TabContainer = Template.bind({});
