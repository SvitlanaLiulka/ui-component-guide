import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSpinner, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHourglassEmpty } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './FontAwesomeIcons.module.css';

const Icons = () => (
    <div className={styles.container}>
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faHouse} size='2x' />
        <FontAwesomeIcon icon={faHouse} size='3x' />
        <FontAwesomeIcon icon={faHourglassEmpty} size='2xs' />
        <FontAwesomeIcon icon={faHourglassEmpty} size='xs' />
        <FontAwesomeIcon icon={faHourglassEmpty} size='sm' />
        <FontAwesomeIcon icon={faHourglassEmpty} />
        <FontAwesomeIcon icon={faHourglassEmpty} size='md' />
        <FontAwesomeIcon icon={faHourglassEmpty} size='lg' />
        <FontAwesomeIcon icon={faHourglassEmpty} size='xl' />
        <FontAwesomeIcon icon={faHourglassEmpty} size='2xl' />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faSpinner} spin size='lg' />
        <FontAwesomeIcon icon={faHeart} beat size='lg' color='red' />
    </div>
);

export default Icons;
