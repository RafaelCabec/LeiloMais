import React, { useCallback, useState } from "react";
import { Button, View , Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Stream() {
    const [ playing, setPlayin] = useState(false);

    const onStateChange = useCallback ((state) => {
        if (state === "ended") {
            setPlayin(false);
            Alert.alert("A transmissão acabou!");
        }
    }, []);

    const togglePlaying = useCallback (() => {
        setPlayin((prev) => !prev);
    }, []);

    const VideoId = "Edk0TfK94pA";

    return (
        <View>
            <YoutubePlayer
                height = {500}
                width = {400} 
                play = {playing}
                videoId = {VideoId}
                onChangeState = {onStateChange}
            />
            {/* 
            
            <Button 
                title = { playing ? "pause" : "play" }
                onPress = {togglePlaying}
            /> 
            
            */}
        </View>
    )
}