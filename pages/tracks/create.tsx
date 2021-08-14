import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@material-ui/core";
import FileUpload from "../../components/FileUpload";

const Create = () => {
        const [activeStep, setActiveStep] = React.useState(0);
        const [picture, setPicture] = React.useState(null);
        const [audio, setAudio] = React.useState(null);
        const back = () => {
            setActiveStep(prev => prev - 1)
        }
        const next = () => {
            setActiveStep(prev => prev + 1)

        }
        return (
            <MainLayout>
                <StepWrapper activeStep={activeStep}>
                    {activeStep === 0 && <Grid container direction="column" style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={'навание трека'}
                        />
                        <TextField
                            style={{marginTop: 10}}

                            label={'имя исполнителя'}
                        />
                        <TextField
                            style={{marginTop: 10}}

                            multiline
                            rows={3}
                            label={'слова к треку'}
                        />
                    </Grid>}
                    {activeStep === 1 && <FileUpload
                        setFile={setPicture}
                        accept={'image/*'}
                    >
                        <Button>Загрузить изображение</Button>
                    </FileUpload>}
                    {activeStep === 2 && <FileUpload
                        setFile={setAudio}
                        accept={'audio/*'}
                    >
                        <Button>Загрузить аудио</Button>
                    </FileUpload>}
                </StepWrapper>
                <Grid container justifyContent={'space-between'}>
                    <Button disabled={activeStep === 0} onClick={back}>назад</Button>
                    <Button disabled={activeStep === 2} onClick={next}>далее</Button>
                </Grid>
            </MainLayout>
        );
    }
;

export default Create;