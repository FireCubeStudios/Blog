"use client" // Needed for next.js when using useState

import { useState } from "react";
import styles from "./SearchButton.module.css";
import { SearchIcon } from "./SearchIcon.js"

export default function SearchButton() {
    return(
        <div className={styles.searchbutton}>
            <SearchIcon/>
            <div className={styles.glowbar}/>
        </div>
    );
}