import { useState } from 'react';
import styles from './index.module.css';
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import SearchContainer from "../Recommendation/SearchContainer";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const tweets = [
        {
            authorName: "Free KZ today",
            authorUsername: "@kz",
            img: 'images/kz.png',
            content: 'Youth won GOLD MEDALS FROM IOI and IMO',
            replies: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: "/images/nfactorial.png",
            content: 'Data analytics course starts today',
            replies: 1000,
            retweets: 2000,
            likes: 5000
        },
        {
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: "/images/nfactorial.png",
            content: 'Black friday! Успей купить все курсы!',
            replies: 1000,
            retweets: 2000,
            likes: 5000
        }
    ];

    const filteredTweets = tweets.filter(tweet =>
        tweet.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.MainPart}>
            <h5>Home</h5>
            <SearchContainer setSearchQuery={setSearchQuery} />
            <NewTweet />
            <TweetsList tweets={filteredTweets} />
        </div>
    );
}
