"use client" // Needed for next.js when using useState

import { useState } from "react";
import styles from "./ArticleCard.module.css";

export default function ArticleCard() {
    return(
        <div className={styles.container}>
            <div>
                
            </div>
            <div className={styles.articlePreview}>
                <h1 className="text-xl">Article header</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
        </div>
    );
}