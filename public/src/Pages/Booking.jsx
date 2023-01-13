import '../Styles/dashboard.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, Grid, IconButton } from '@mui/material';
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
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { RxDashboard } from "react-icons/rx";



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import car4 from "../Assets/img/5.png"
import car5 from "../Assets/img/6.png"
import car6 from "../Assets/img/7.png"
import car7 from "../Assets/img/8.png"
import car8 from "../Assets/img/9.png"
import car9 from "../Assets/img/10.png"



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










const Booking = () => {

    const [select, setSelect] = React.useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    };


    return (





        <>


            <Grid container sx={{ backgroundColor: "#F5F5F5", width: "100%" , ml:30 , pl:6}} >



                <Typography variant="h3" sx={{ml:0,  mt: 10 }}> <span>Booking</span> </Typography>



                <Grid container spacing={6} direction="row" sx={{  mt: 2, mb: 4, ml: 0 }} >

                    <Grid item sx={3}    >

                        <Box sx={{ minWidth: 120 }} direction="row">
                            <FormControl fullWidth sx={{backgroundColor:"#fff" }}>
                                <InputLabel id="demo-simple-select-label" >New</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={select}
                                    label="Age"
                                    onChange={handleChange}
                                    
                                >
                                    <MenuItem value={10}>Popular</MenuItem>
                                    <MenuItem value={20}>Most Selled</MenuItem>
                                    <MenuItem value={30}>Cheapest</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                    </Grid>


                    <Grid item sx={3}    >

                        <Box sx={{ minWidth: 120 }} direction="row">
                            <FormControl fullWidth sx={{backgroundColor:"#fff" }}>
                                <InputLabel id="demo-simple-select-label" >Toyota</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={select}
                                    label="Age"
                                    onChange={handleChange}
                                    
                                >
                                    <MenuItem value={10}>BMW</MenuItem>
                                    <MenuItem value={20}>Porshe</MenuItem>
                                    <MenuItem value={30}>Audi</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                    </Grid>

                    <Grid item sx={3}>

                        <IconButton sx={{backgroundColor:"white" , ml:80}}>
                            <RxDashboard ></RxDashboard>
                        </IconButton>

                        <IconButton sx={{backgroundColor:"white", ml:2}}>
                            <TuneOutlinedIcon ></TuneOutlinedIcon>
                        </IconButton>



                    </Grid>






                </Grid>




                <Grid container spacing={2} direction="row" sx={{ p: 0, mb: 4 }} >

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, ml: 0, borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car4}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car5}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car6}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>


                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, ml: 0, borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car7}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>


                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365,  borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car8}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>


                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365,  borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car9}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>


                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365, ml: 0, borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car4}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>

                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365,  borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car5}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>


                    <Grid item sx={3}   >

                        <Card sx={{ maxWidth: 400, width: 365,  borderRadius: 5, backgroundColor: "#fff" }} >


                            <CardHeader 
                            
                            avatar={ 
                            <CardContent>
                                <Typography variant="h4" sx={{ fontSize: "18px", ml: 0 , mt:-1 }} > <span>Porsche 911 Carrera</span>  </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{ fontSize: "16px", ml: 0 , mt:1 }} > coupe  </Typography>

                            </CardContent>
                            
                        }
                            
                            action={
                                <IconButton aria-label="settings">
                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                            </IconButton>
                            } 
                            >
                            
                            </CardHeader>

                            <CardContent></CardContent>

                            <CardMedia
                                sx={{ height: 106, width: 257, ml: 6  ,mt:-6}}
                                image={car6}
                                title="green iguana"

                            >
                            </CardMedia>
                            <CardContent>

                            </CardContent>
                            <CardContent sx={{ mt: -3 }}>

                            <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{color:"#A162F7"}} ></PersonOutlineOutlinedIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>4</span></Typography>
                                </IconButton>
                                
                                <IconButton>
                                    <RepeatIcon sx={{color:"#A162F7"}} ></RepeatIcon>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "14px", ml: 0 }}><span>Manual</span></Typography>
                                </IconButton>
                                
                                
                                <IconButton>
                                    <Typography variant="h6" color="text.secondary" sx={{ fontSize: "16px", ml: 12 }}><span>$400</span> /h</Typography>

                                </IconButton>
                            </CardContent>



                        </Card>
                    </Grid>

                    


                    



                </Grid>
















            </Grid>

































        </>




    )
};

export default Booking;

