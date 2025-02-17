"use client" // Needed for next.js when using useState

import styles from "./GlowLink.module.css";

interface props { // Specifies types for prop parameters
    href: string;
    children: React.ReactNode;
}

export default function GlowLink({href, children}: props) {
    return(
        <div className={styles.container}>
            <a href={href} target="_blank" className={styles.link}>{children}</a>
            <div className={styles.glowbar}/>
        </div>
    );
}