"use client" // Needed for next.js when using useState

import { useState } from "react";
import styles from "./SearchBox.module.css";
import SearchButton from "./SearchButton/SearchButton";

export default function SearchBox() {
    return(
        <div className={styles.container}>
            <div className={styles.searchflexbox}>
                <input type="search" className={styles.input} placeholder="Search for posts"/>
                <SearchButton/>
            </div>
            <div className={styles.glowbar}/>
        </div>
    );
}