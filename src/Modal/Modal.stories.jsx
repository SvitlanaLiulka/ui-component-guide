import React, { useState } from 'react';
import { Button, Modal } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { BACKDROP_TYPE, FULLSCREEN, MODAL_SIZE } from './const';

export default {
    title: 'Modal',
    component: Modal,
    argTypes: {
        animation: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        ariaDescribedby: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        ariaLabel: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        ariaLabelledby: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        autoFocus: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        backdrop: {
            options: BACKDROP_TYPE,
            control: { type: 'select' },
            ...getComponentPropType(BACKDROP_TYPE, true),
        },
        backdropClassName: {
            control: 'text',
            ...getComponentPropType('string'),
        },
        centered: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
        },
        container: {
            ...getComponentPropType('any'),
        },
        contentClassName: {
            control: 'string',
            ...getComponentPropType('string'),
            description: 'Additional class name for the modal content',
        },
        dialogAs: {
            ...getComponentPropType('elementType'),
            description: 'This is a useful prop when you want to use your own styles and markup to create a custom modal component',
        },
        dialogClassName: {
            ...getComponentPropType('string'),
            description: 'A css class to apply to the Modal dialog DOM node',
        },
        enforceFocus: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        fullscreen: {
            options: FULLSCREEN,
            control: { type: 'select' },
            ...getComponentPropType(FULLSCREEN),
        },
        keyboard: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        manager: {
            ...getComponentPropType('object'),
            description: 'A ModalManager instance used to track and manage the state of open modals.',
        },
        onEnter: {
            ...getComponentPropType('function'),
            description: 'Callback fired before the Modal transitions in',
        },
        onEntering: {
            ...getComponentPropType('function'),
            description: 'Callback fired as the Modal begins to transition in',
        },
        onEntered: {
            ...getComponentPropType('function'),
            description: 'Callback fired after the Modal finishes transitioning in',
        },
        onEscapeKeyDown: {
            ...getComponentPropType('function'),
            description: 'A callback fired when the escape key, if specified in keyboard, is pressed',
        },
        onExit: {
            ...getComponentPropType('function'),
            description: 'Callback fired before the Modal transitions out',
        },
        onExiting: {
            ...getComponentPropType('function'),
            description: 'Callback fired as the Modal begins to transition out',
        },
        onExited: {
            ...getComponentPropType('function'),
            description: 'Callback fired after the Modal finishes transitioning out',
        },
        onHide: {
            ...getComponentPropType('function'),
            description: 'A callback fired when the header closeButton',
        },
        onShow: {
            ...getComponentPropType('function'),
            description: 'A callback fired when the Modal is opening',
        },
        restoreFocus: {
            control: 'boolean',
            ...getComponentPropType('boolean', true),
        },
        restoreFocusOptions: {
            ...getComponentPropType('{}'),
            description: 'Options passed to focus function when `restoreFocus` is set to `true`',
        },
        show: {
            control: 'boolean',
            ...getComponentPropType('boolean', false),
        },
        scrollable: {
            control: 'boolean',
            ...getComponentPropType('boolean'),
            description: 'Allows scrolling the Modal.Body instead of the entire Modal when overflowing',
        },
        size: {
            options: MODAL_SIZE,
            control: { type: 'radio' },
        },
        bsPrefix: {
            control: 'text',
            ...getComponentPropType('string', 'modal'),
        },
    },
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant="primary">Click to open modal</Button>
            <Modal {...args} show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setIsOpen(false)} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export const ModalComponent = Template.bind({});
