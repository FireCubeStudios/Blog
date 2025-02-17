"use client" // Needed for next.js when using useState

import styles from "./GlowLink.module.css";

interface props { // Specifies types for prop parameters
    href?: string;
    color?: string
    children?: React.ReactNode;
}

export default function GlowLink({href, color, children}: props) {

    /*
     * Use color prop if specified, otherwise use accent color as default
     * We then pass it in to the CSS module as the --glow-color variable
     */
    const GlowColor = color || "var(--accent)" 
    return(
        <div className={styles.container} style={{ "--glow-color": GlowColor } as React.CSSProperties}>
            <a href={href} target="_blank" className={styles.link}>{children}</a>
            <div className={styles.glowbar}/>
        </div>
    );
}