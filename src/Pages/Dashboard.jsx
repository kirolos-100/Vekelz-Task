import '../Styles/dashboard.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid, IconButton } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import HeightIcon from '@mui/icons-material/Height';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RepeatIcon from '@mui/icons-material/Repeat';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';



import car1 from "../Assets/img/2.png"
import car2 from "../Assets/img/3.png"
import car3 from "../Assets/img/4.png"



import Bar from '../Components/Charts/Bar';
import LineChart from '../Components/Charts/Line';

/* 
const BorderCircularProgress = styled(CircularProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    
    [`&.${circularProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${circularProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

 */









// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props: CircularProgressProps) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],

                    rotate: "240deg",
                }}

                size={120}
                thickness={5}
                {...props}
                value={70}

            />
            <CircularProgress
                variant="determinate"


                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#A162F7' : '#308fe8'),
                    rotate: "240deg",
                    position: 'absolute',
                    left: 45,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                value={45}
                size={120}
                thickness={5}
                {...props}

            />
        </Box>
    );
}


// Inspired by the former Facebook spinners.
function FacebookCircularProgress1(props: CircularProgressProps) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],

                    rotate: "240deg",
                }}

                size={120}
                thickness={5}
                {...props}
                value={70}

            />
            <CircularProgress
                variant="determinate"


                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#FF7E86' : '#308fe8'),
                    rotate: "240deg",
                    position: 'absolute',
                    left: 45,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                value={45}
                size={120}
                thickness={5}
                {...props}

            />
        </Box>
    );
}


function FacebookCircularProgress2(props: CircularProgressProps) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],

                    rotate: "240deg",
                }}

                size={120}
                thickness={5}
                {...props}
                value={70}

            />
            <CircularProgress
                variant="determinate"


                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#F6CC0D' : '#308fe8'),
                    rotate: "240deg",
                    position: 'absolute',
                    left: 45,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                value={45}
                size={120}
                thickness={5}
                {...props}

            />
        </Box>
    );
}





















const Dashboard = () => {
    return (

        <>


            <Grid container sx={{ backgroundColor: "#F5F5F5", width: "100%"  , ml:30 , pl:6}} >




                <Grid container spacing={6} direction="row" sx={{ p: 0, mt: 6, mb: 4 }} >

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 260, width: 240, ml: 0, borderRadius: 5, backgroundColor: "#fff", textAlign: "center" }} >


                            <BoltIcon sx={{ mt: 3, color: '#A162F7' }} />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 25, mb: 6 }}>
                                    Energy
                                </Typography>


                                <Box sx={{ flexGrow: 1 }}>
                                    <FacebookCircularProgress value={30} />


                                </Box>
                                <Typography sx={{ fontSize: 23, position: "relative", top: -80, right: -5, mb: -6 }}>45%</Typography>



                            </CardContent>

                        </Card>
                    </Grid>


                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 260, width: 240, borderRadius: 5, backgroundColor: "#fff", textAlign: "center" }} >


                            <HeightIcon sx={{ mt: 3, color: '#FF7E86' }} />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 25, mb: 6 }}>
                                    Range
                                </Typography>


                                <Box sx={{ flexGrow: 1 }}>
                                    <FacebookCircularProgress1 value={35} />


                                </Box>
                                <Typography sx={{ fontSize: 23, position: "relative", top: -80, right: -5, mb: -6 }}>157k%</Typography>










                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 260, width: 240, borderRadius: 5, backgroundColor: "#fff", textAlign: "center" }} >


                            <OilBarrelIcon sx={{ mt: 3, color: '#A162F7' }} />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 25, mb: 6 }}>
                                    Break Fluid
                                </Typography>


                                <Box sx={{ flexGrow: 1 }}>
                                    <FacebookCircularProgress value={7} />


                                </Box>
                                <Typography sx={{ fontSize: 23, position: "relative", top: -80, right: -5, mb: -6 }}>9%</Typography>










                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 260, width: 240, borderRadius: 5, backgroundColor: "#fff", textAlign: "center" }} >


                            <TireRepairIcon sx={{ mt: 3, color: '#F6CC0D' }} />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 25, mb: 6 }}>
                                    Tire Wear
                                </Typography>


                                <Box sx={{ flexGrow: 1 }}>
                                    <FacebookCircularProgress2 value={20} />


                                </Box>
                                <Typography sx={{ fontSize: 23, position: "relative", top: -80, right: -5, mb: -6 }}>25%</Typography>










                            </CardContent>

                        </Card>
                    </Grid>


                </Grid>



















                <Grid container spacing={3} direction="row" sx={{ p: 0, mt: 0, mb: 4 }} >

                    <Grid item sx={4}   >

                        <Card sx={{ maxWidth: "700px", width: "550px", height: "400px", ml: 0, borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardContent >
                                <Typography variant="h5" sx={{ ml: 4, mb: -1 }} > <span>Miles</span> Statistics </Typography>
                            </CardContent>
                            <CardContent sx={{ ml: 4 }} >
                                <Button variant="contained" sx={{ borderRadius: 5, mr: 2, fontSize: 12 }} >Day</Button>
                                <Button variant="text" sx={{ borderRadius: 5, mr: 2, fontSize: 12 }} >Week</Button>
                                <Button variant="text" sx={{ borderRadius: 5, fontSize: 12 }} >Month</Button>
                                <Typography variant="h7" sx={{ ml: 22, fontSize: "14px" }} > 256 Miles </Typography>
                            </CardContent>

                            <Bar></Bar>

                        </Card>
                    </Grid>


                    <Grid item sx={4}   >

                        <Card sx={{ maxWidth: "700px", width: "550px", height: "400px", borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardContent >
                                <Typography variant="h5" sx={{ ml: 4, mb: -1 }} > <span>Car</span> Statistics </Typography>
                            </CardContent>
                            <CardContent sx={{ ml: 4 }} >
                                <Typography variant="h7" sx={{ mr: 18, fontSize: "14px" }} > 20 February 0222 </Typography>
                                <Button variant="contained" color='warning' sx={{ borderRadius: 5, mr: 2, fontSize: 12, backgroundColor: "#FF764C" }} >Day</Button>
                                <Button variant="text" sx={{ borderRadius: 5, mr: 2, fontSize: 12, color: "#FF764C" }} >Week</Button>
                                <Button variant="text" sx={{ borderRadius: 5, fontSize: 12, color: "#FF764C" }} >Month</Button>
                            </CardContent>

                            <LineChart></LineChart>





                        </Card>
                    </Grid>


                </Grid>













                <Grid container spacing={2} direction="row" sx={{ p: 0, mb: 4 }} >

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, ml: 0, borderRadius: 5, backgroundColor: "#E1DFA4" }} >



                            <CardHeader avatar={
                                <IconButton>
                                    <AutorenewIcon />
                                </IconButton>
                            }
                                subheader="74% recommended"

                            >

                            </CardHeader>

                            
                            <CardMedia
                                sx={{ height: 106 , width:257 , ml:6 }}
                                image={car1}
                                title="green iguana"
                            
                            >
                            </CardMedia>
                            <CardContent>
                            <Typography variant="h4" sx={{ fontSize:"18px" , ml:2 }} > <span>Porsche 911 Carrera</span>  </Typography>

                            </CardContent>
                            <CardContent sx={{mt:-3}}>
                                <IconButton>
                                <RepeatIcon></RepeatIcon>
                                </IconButton>
                                <IconButton>
                                <Typography variant="h6" color="text.secondary" sx={{ fontSize:"14px" , ml:0}}><span>123k</span></Typography>
                                    
                                </IconButton>
                                <IconButton>
                                <SettingsSuggestIcon sx={{ml:0}}></SettingsSuggestIcon>

                                </IconButton>
                                <IconButton>
                                <BoltIcon></BoltIcon>

                                </IconButton>
                                <IconButton>
                                <Typography variant="h6" color="text.secondary" sx={{ fontSize:"14px" , ml:12}}><span>$32/h</span></Typography>
                                    
                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>


                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, borderRadius: 5, backgroundColor: "#E3ECF1" }} >


                            
                        <CardHeader avatar={
                                <IconButton>
                                    <AutorenewIcon />
                                </IconButton>
                            }
                                subheader="74% recommended"

                            >

                            </CardHeader>

                            
                            <CardMedia
                                sx={{ height: 106 , width:257 , ml:6 }}
                                image={car2}
                                title="green iguana"
                            
                            >
                            </CardMedia>
                            <CardContent>
                            <Typography variant="h4" sx={{ fontSize:"18px" , ml:2 }} > <span>Porsche 911 Carrera</span>  </Typography>

                            </CardContent>
                            <CardContent sx={{mt:-3}}>
                                <IconButton>
                                <RepeatIcon></RepeatIcon>
                                </IconButton>
                                <IconButton>
                                <Typography variant="h6" color="text.secondary" sx={{ fontSize:"14px" , ml:0}}><span>123k</span></Typography>
                                    
                                </IconButton>
                                <IconButton>
                                <SettingsSuggestIcon sx={{ml:0}}></SettingsSuggestIcon>

                                </IconButton>
                                <IconButton>
                                <BoltIcon></BoltIcon>

                                </IconButton>
                                <IconButton>
                                <Typography variant="h6" color="text.secondary" sx={{ fontSize:"14px" , ml:12}}><span>$32/h</span></Typography>
                                    
                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, borderRadius: 5, backgroundColor: "#F4E3E5" }} >


                            
                        <CardHeader avatar={
                                <IconButton>
                                    <AutorenewIcon />
                                </IconButton>
                            }
                                subheader="74% recommended"

                            >

                            </CardHeader>

                            
                            <CardMedia
                                sx={{ height: 106 , width:257 , ml:6 }}
                                image={car3}
                                title="green iguana"
                            
                            >
                            </CardMedia>
                            <CardContent>
                            <Typography variant="h4" sx={{ fontSize:"18px" , ml:2 }} > <span>Porsche 911 Carrera</span>  </Typography>

                            </CardContent>
                            <CardContent sx={{mt:-3}}>
                                <IconButton>
                                <RepeatIcon></RepeatIcon>
                                </IconButton>
                                <IconButton>
                                <Typography variant="h6" color="text.secondary" sx={{ fontSize:"14px" , ml:0}}><span>123k</span></Typography>
                                    
                                </IconButton>
                                <IconButton>
                                <SettingsSuggestIcon sx={{ml:0}}></SettingsSuggestIcon>

                                </IconButton>
                                <IconButton>
                                <BoltIcon></BoltIcon>

                                </IconButton>
                                <IconButton>
                                <Typography variant="h6" color="text.secondary" sx={{ fontSize:"14px" , ml:12}}><span>$32/h</span></Typography>
                                    
                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>



                </Grid>

            </Grid>






        </>




    )
};

export default Dashboard;

