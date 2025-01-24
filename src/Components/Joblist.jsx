import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Paper, Typography, styled, Button, Container, Chip } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Addnewjob from './Addnewjob';



const Joblist = () => {
  const jobs = useSelector((state) => state.job.jobs)

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Addnewjob />
        <Grid container spacing={2}>
          {jobs.map((job) => (
            <Grid key={job.id} item md={4} sm={6} xs={12}>
              <Paper sx={{ p: 2, borderRadius: '10px', cursor: 'pointer' }} 
               onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'}
               onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '10px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Company Image" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {job.title}
                    </Typography>
                    <Typography sx={{ color: 'var(--darktext-color)', fontSize: '14px' }}>
                      Hiring Mine
                    </Typography>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
                  <Chip label="Full Time" variant="outlined" />
                  <Chip label="Onsite" variant="outlined" />
                  <Chip label="2-4 years" variant="outlined" />
                </div>
                <Typography sx={{ fontSize: '14px', marginTop: '10px' }}>
                  2 Days ago - Position: {job.position}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    $2000/m
                  </Typography>
                  <Button sx={{ backgroundColor: 'var(--lightbackground-color)', padding: '5px 20px', borderRadius: '5px' }}>Apply Now</Button>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
export default Joblist



