import React from 'react';
import styles from './index.module.css';

interface SearchContainerProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>; // Explicit type for setSearchQuery
}

export default function SearchContainer({ setSearchQuery }: SearchContainerProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value); // e is now properly typed
    };

    return (
        <div className={styles.searchBar}>
            <span className={styles.icon}>🔍</span>
            <input
                type="text"
                placeholder="Search Twitter"
                className={styles.searchInput}
                onChange={handleInputChange}
            />
        </div>
    );
}
