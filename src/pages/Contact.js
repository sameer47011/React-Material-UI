import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Flare } from '@mui/icons-material';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my:5,
        ml: 10,
        "& h4": {
          fontWeight: 'bold',
          mb: 2
        },
        "@media (max-width:600px)": {
          ml: 0,
          textAlign: 'center' // Text ko center align karne ke liye
        }
      }}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Box>
      <Box sx={{margin:3,width:'600px',ml:10,"@media (max-width:600px)":{
        width:'100%',ml:0,display:'flex',justifyContent:'center',alignItems:'center'
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:'black',color:'white'}} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt:1,}}/>1234567890(tollfree)
                </TableCell>
                 </TableRow>
                 <TableRow>
                 <TableCell>
                  <EmailIcon sx={{color:'skyblue',paddingTop:1}}/>help@myrest.com
                </TableCell>
                 </TableRow>
                 <TableRow>
                 <TableCell>
                  <CallIcon sx={{color:'green',paddingTop:1}}/>1234567890
                </TableCell>
                 </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact