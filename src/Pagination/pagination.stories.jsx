import React from 'react';
import { Pagination as PaginationComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';

PaginationComponent.displayName = 'Pagination';

export default {
    title: 'Pagination/Pagination',
    component: PaginationComponent,
    args: {
        onPageChange: () => true,
        totalDataCount: 60,
        countForPage: 5,
        currentPage: 7,
        prevBtnText: '',
        nextBtnText: '',
    },
    argTypes: {
        totalDataCount: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        countForPage: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        currentPage: {
            control: 'number',
            ...getComponentPropType('number'),
        },
        onPageChange: {
            ...getComponentPropType('function'),
        },
        prevBtnText: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        nextBtnText: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});
