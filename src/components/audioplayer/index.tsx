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

import albumCover from '@/assets/image/IU_cover.jpg';

const AudioPlayer = () => {
    const theme = useTheme();

    return (
        <Card
            elevation={0}
            sx={{
                display: 'flex',
                height: 80,
                maxWidth: 350,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)', // 뒷 배경을 흐리게 해서 글자 가독성 확보
                backgroundImage: 'none',
            }}
        >
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
                    <IconButton size="small" aria-label="play/pause">
                        <PlayArrowIcon sx={{height: 28, width: 28}}/>
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