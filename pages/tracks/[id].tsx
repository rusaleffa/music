import React from 'react';
import {useRouter} from "next/router";
import {Button, Grid, TextField} from "@material-ui/core";
import {ITrack} from '../../types/track'

interface TrackItemProps {
    track: ITrack;
}


const TrackPage: React.FC<TrackItemProps> = ({track}) => {
    const router = useRouter();
    return (
        <div>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}>

            </Button>
            <Grid container>
                <img src={track.picture} width={200} height={200} alt="song img"/>
                <div>
                    <h1>{track.name}</h1>
                    <h1>{track.artist}</h1>
                    <h1>{track.listeners}</h1>
                </div>
            </Grid>
            <h1>Слова</h1>
            <p>{track.text}</p>
            <h1>коменты</h1>
            <Grid container>

                <TextField
                    label={'Ваше имя'}
                    fullWidth
                />
                <TextField
                    label={'комент'}
                    multiline
                    rows={4}
                    fullWidth
                />
            </Grid>
            <div>
                {track.comments.map((comment, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div>
                                автор - {comment.username}
                            </div>
                            <div>
                                коммент - {comment.text}
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    );
};

export default TrackPage;