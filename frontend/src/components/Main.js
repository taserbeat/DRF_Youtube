import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import Modal from 'react-modal';

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

import { IoMdClose } from "react-icons/io";
import { RiUploadCloud2Line } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { BsImages } from "react-icons/bs";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: "center",
    },
    grid: {
        justifyContent: "center",
    },
}));

const Main = () => {
    const classes = useStyles();
    Modal.setAppElement('#root');

    const {
        title,
        setTitle,
        video,
        setVideo,
        thum,
        setThum,
        modalIsOpen,
        setModalIsOpen,
        newVideo,
    } = useContext(ApiContext);

    const customStyles = {
        content: {
            top: "30%",
            left: "43%",
            right: "auto",
            bottom: "auto",
        },
    };

    return (
        <>
            <Grid container className={classes.grid}>
                <Grid item xs={11}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}></Grid>

                        <Grid item xs={1}>
                            <Fab
                                color="primary"
                                aria-label="add"
                                onClick={() => setModalIsOpen(true)}
                            >
                                <AddIcon />
                            </Fab>
                        </Grid>

                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>

                        <Grid item xs={3}>
                            <VideoList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Main;
