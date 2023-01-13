import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
/* import Divider from '@mui/material/Divider';
 */
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Grid } from '@mui/material';


const Header = () => {
    return (

        <>


            {/* 
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 10, backgroundColor: 'rgba(250, 250, 250)' }}
            >

                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search "
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>


            <div> <IconButton sx={{ p: '10px', color: 'black',     }}>
                <NotificationsActiveOutlinedIcon sx={{ fontSize: 28 }}></NotificationsActiveOutlinedIcon>
            </IconButton> </div>
            
 */}













            <Grid sx={{p:'10px', zIndex:1 , position: 'fixed' ,  background: '#fff'}} container spacing={12}>
                <Grid item xs={8}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 40, backgroundColor: 'rgba(250, 250, 250)'  }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search "
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>


                    </Paper>
                </Grid>
                <Grid item xs={4}>

                    <IconButton sx={{ p: '10px',zIndex: 0 , color: 'black', ml:34}}>
                        <NotificationsActiveOutlinedIcon sx={{ fontSize: 28 }}></NotificationsActiveOutlinedIcon>
                    </IconButton>
                    <IconButton sx={{ p: '10px', zIndex: 0,  color: 'black', ml:1}}>
                        <AccountCircleOutlinedIcon sx={{ fontSize: 28 }}></AccountCircleOutlinedIcon>
                    </IconButton>

                </Grid>



            </Grid>

            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
            {/*                     <IconButton sx={{ p: '10px' , color:'black'}}>
                <AccountCircleOutlinedIcon sx={{fontSize:28}}></AccountCircleOutlinedIcon>
            
            </IconButton> */}



        </>

    );
};

export default Header




/**
 * 
 * import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
      
    </Paper>
  );
}
 * 
 */