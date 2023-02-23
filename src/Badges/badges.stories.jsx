import React from 'react';
import { Badge as BadgeComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { BADGE_VARIANT, BADGE_AS } from './const';

export default {
    title: 'Badge/Badge',
    component: BadgeComponent,
    args: {
        children: 'text',
    },
    argTypes: {
        children: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        as: {
            control: { type: 'select' },
            options: BADGE_AS,
            ...getComponentPropType(BADGE_AS),
        },
        bg: {
            options: BADGE_VARIANT,
            control: { type: 'radio' },
            ...getComponentPropType(BADGE_VARIANT, 'primary'),
        },
        pill: {
            control: 'boolean',
            ...getComponentPropType('boolean', 'false'),
        },
        text: {
            options: BADGE_VARIANT,
            control: { type: 'radio' },
            ...getComponentPropType(BADGE_VARIANT),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'badge'),
        },
    },
};

const Template = args => <BadgeComponent {...args} />;

export const Badge = Template.bind({});
