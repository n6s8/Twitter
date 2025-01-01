import {KZ_IMG_PATH, NFACTORIAL_IMG_PATH} from "../images";
import Tweet from "./Tweet.tsx";

export default function TweetsList() {
    const tweets = [
        {
            authorName: "Free KZ today",
            authorUsername: "@kz",
            img: KZ_IMG_PATH,
            content: 'Youth won GOLD MEDALS FROM IOI and IMO',
            replies: 200,
            retweets: 1000,
            likes:500
        },
        {
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: NFACTORIAL_IMG_PATH,
            content: 'Data analytics course starts today',
            replies: 1000,
            retweets: 2000,
            likes: 5000
        },
        {
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить все курсы!',
            replies: 1000,
            retweets: 2000,
            likes: 5000
        }
    ]

    return tweets.map((tweet, index) => <Tweet {...tweet} key={index} />)
}