import { useState, useEffect } from "react";
import ChartList from "../components/ChartList"

const MusicContainer = () => {

    const [music, setMusic] = useState([]);

    useEffect(() => {
        getMusic();
    }, []);

    const getMusic = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json').then((response) => response.json()).then(music => setMusic(music.feed.entry));
    };

    return (
        <>
        <h1>Top 20 Hits</h1>
        <ChartList music={music}/>
        </>
    )
}

export default MusicContainer