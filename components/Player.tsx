import React from 'react';
import {Grid, IconButton} from "@material-ui/core";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import styles from '../styles/Player.module.scss'
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ITrack} from "../types/track";
import {useActions} from "../hooks/useActions";


let audio;

const Player = () => {
    const tracks: ITrack[] = [
        {
            listeners: 0,
            artist: 'd',
            _id: '123',
            audio: '123',
            name: 'art',
            picture: 'ds',
            text: 'dsa',
            comments: []
        }
    ]

    const {active, currentTime, duration, pause, volume} = useTypedSelector(state => state.player);
    const {pauseTrack, playTrack, setActiveTrack, setCurrentTime, setDuration, setVolume} = useActions();

    React.useEffect(() => {
        if (!audio) {
            audio = new Audio();
            audio.volume = volume / 100

        }
    }, [])

    const play = (): void => {
        if (pause) {
            playTrack()
            audio.play();
            audio.src = tracks[0].audio;
        } else {
            pauseTrack()
            audio.pause()

        }
    }
    let fn = (e): void => {
        e.stopPropagation()
        play()
    }
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value))
    }

    return (
        <div
            className={styles.player}
        >
            <IconButton
                onClick={fn}
            >
                {!pause
                    ? <PlayArrow/>
                    : <Pause/>
                }

            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{tracks[0].name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{tracks[0].artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={(e) => {
            }}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;