import React from 'react'
import { APP_NAME } from '../constants'

const CURRENT_YEAR = new Date().getFullYear()

import styles from './Footer.module.sass'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p>
                ©️2023-{CURRENT_YEAR} {APP_NAME}, all rights reserved
            </p>
        </footer>
    )
}
