import React, { useEffect, useState } from "react";
import axios from "axios";
import Tweet from "../Tweet/Tweet"
import { useSelector } from "react-redux";

const TimelineTweet = () => {
    const [timeLine, setTimeLine] = useState(null);

    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timelineTweets = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/tweets/timeline/${currentUser._id}`
                );

                setTimeLine(timelineTweets.data);
            } catch (err) {
                // console.log("error", err);
            }
        };

        fetchData();
    }, [currentUser._id]);

    // console.log("Timeline", timeLine);
    return (
        <div className="mt-6">
            {timeLine &&
                timeLine.map((tweet) => {
                    return (
                        <div key={tweet._id} className="p-2">
                            <Tweet tweet={tweet} setData={setTimeLine} />
                        </div>
                    );
                })}
        </div>
    );
};

export default TimelineTweet;
