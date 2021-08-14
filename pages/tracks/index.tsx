import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    // const {} = useTypedSelector(state => state.player)
    //const {} = useActions();
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
    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>
                                Список треков
                            </h1>
                            <Button
                                onClick={() => router.push('/tracks/create')}
                            >
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;