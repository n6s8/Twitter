import Tweet from './Tweet.tsx';

interface TweetProps {
    img: string;
    authorName: string;
    authorUsername: string;
    content: string;
    replies: number;
    retweets: number;
    likes: number;
}

interface TweetsListProps {
    tweets: TweetProps[];
}

export default function TweetsList({ tweets }: TweetsListProps) {
    return (
        <div>
            {tweets.map((tweet, index) => (
                <Tweet {...tweet} key={index} />
            ))}
        </div>
    );
}
