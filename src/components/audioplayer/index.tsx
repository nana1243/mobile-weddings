import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';

import audioFile from '@/assets/audio/blueming.mp3';
import {useEffect, useRef, useState} from "react";

const AudioPlayer = () => {
    const theme = useTheme();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio)
            return;
        const handleEnded = () => {
            setIsPlaying(false);
        };
        const handlePause = () => {
            setIsPlaying(false);
        };
        const handlePlay = () => {
            setIsPlaying(true);
        };
        // 에러 핸들링
        const handleError = (e: Event) => {
            console.error('오디오 재생 오류:', e);
            setIsPlaying(false);
        };
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('error', handleError);
        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('error', handleError);
        };
    }, []);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };


    return (
        <Card
            elevation={0}
            sx={{
                display: 'flex',
                height: 80,
                maxWidth: 350,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                backgroundImage: 'none',
            }}
        >
            <audio ref={audioRef}
                   src={audioFile}
                   onLoadedData={() => {
                       if (isPlaying && audioRef.current) {
                           audioRef.current.play();
                       }
                   }}/>
            <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
                <CardContent sx={{flex: '1 0 auto', pt: 1, pb: 0, px: 2}}>
                    <Typography variant="body1" fontWeight="bold" sx={{lineHeight: 1.2}}>
                        Blueming
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        아이유
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 0.5}}>
                    <IconButton size="small" aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon fontSize="small"/> :
                            <SkipPreviousIcon fontSize="small"/>}
                    </IconButton>
                    <IconButton
                        size="small"
                        aria-label="play/pause"
                        onClick={togglePlayPause}

                    >
                        {isPlaying ? <PauseIcon sx={{height: 28, width: 28}}/> :
                            <PlayArrowIcon sx={{height: 28, width: 28}}/>}
                    </IconButton>
                    <IconButton size="small" aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon fontSize="small"/> :
                            <SkipNextIcon fontSize="small"/>}
                    </IconButton>
                </Box>
            </Box>

        </Card>
    );
}
export default AudioPlayer;