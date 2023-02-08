import React from 'react';
import { getComponentPropType } from '../utils/getComponentPropType';

export default {
    title: 'Icons',
    component: <i />,
    includeStories: [],
};

export const argTypes = {
    className: {
        control: {
            type: 'text',
        },
        ...getComponentPropType('string'),
    },
    style: {
        ...getComponentPropType('object', {}),
    },
};
