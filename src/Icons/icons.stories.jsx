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
    }
}

export const args = {
    className: 'bi-alarm',
    style: { 
        fontSize: '2rem', 
        color: 'cornflowerblue',
     },
}

// const Template = args => <i {...args} />;

// export const Icons = Template.bind({});
