import React from 'react';
import { Table as TableComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { TABLE_RESPONSIVE, TABLE_VARIANT } from './const';

export default {
    title: 'Tables/Table',
    component: TableComponent,
    args: {
        striped: false,
        bordered: false,
        borderless: false,
        hover: false,
        responsive: false,
        bsPrefix: 'table',
        size: 'sm',
        variant: 'light',
    },
    argTypes: {
        striped: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        bordered: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        borderless: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        hover: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        responsive: {
            control: { type: 'select' },
            options: TABLE_RESPONSIVE,
            ...getComponentPropType(TABLE_RESPONSIVE, false),
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'table'),
        },
        size: {
            control: '',
            ...getComponentPropType('string', 'sm'),
        },
        variant: {
            control: { type: 'select' },
            options: TABLE_VARIANT,
            ...getComponentPropType(TABLE_VARIANT),
        },
    },
};

const Template = args => (
    <TableComponent {...args}>
        <thead>
            <tr>
                <th />
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </TableComponent>
);

export const Table = Template.bind({});
TableComponent.displayName = 'Table';
