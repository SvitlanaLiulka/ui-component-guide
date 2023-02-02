import React from 'react';
import { Breadcrumb as BreadcrumbComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { BREADCRUMB_AS } from './const';

export default {
    title: 'Breadcrumb',
    component: BreadcrumbComponent,
    argTypes: {
        active: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        as: {
            control: { type: 'select' },
            options: BREADCRUMB_AS,
            ...getComponentPropType(BREADCRUMB_AS),
        },
        href: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        linkAs: {
            control: { type: 'select' },
            options: BREADCRUMB_AS,
            ...getComponentPropType(BREADCRUMB_AS, 'Anchor'),
        },
        linkProps: {
            ...getComponentPropType('object'),
        },
        target: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        title: {
            control: 'ReactNode',
            ...getComponentPropType('ReactNode'),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'breadcrumb-item'),
        },
    },
};

const Template = args => (
    <BreadcrumbComponent>
        <BreadcrumbComponent.Item {...args}>Home</BreadcrumbComponent.Item>
        <BreadcrumbComponent.Item {...args}>Library</BreadcrumbComponent.Item>
        <BreadcrumbComponent.Item {...args}>Data</BreadcrumbComponent.Item>
    </BreadcrumbComponent>
);

export const Breadcrumb = Template.bind({});

Breadcrumb.args = {
    href: 'http://getbootstrap.com/components/#breadcrumbs',
};
