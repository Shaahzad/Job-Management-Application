import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Paper, Typography, styled, Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Addnewjob from './Addnewjob';



const Joblist = () => {
  const jobs = useSelector((state) => state.job.jobs)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: '10px',
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <>
      <Addnewjob />
      <Box sx={{ flexGrow: 1, paddingLeft: '40px', paddingRight: '40px', marginTop: '40px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8 }} >
          {jobs.map((job) => (
            <Grid item xs={2} sm={4} md={4} key={job.id}>
              <Item sx={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>{job.title}</h2>
                  <MoreVertIcon />
                </div>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "20px",
                    color: "gray",
                    fontSize: { md: "16px", xs: "12px" },
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sunt voluptas est ad sit culpa?
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      fontSize: { md: "16px", xs: "12px" },
                    }}
                  >
                    Postion: {job.position}
                  </Typography>
                  <Button variant sx={{ borderRadius: '10px', fontSize: '12px', backgroundColor: 'var(--primary-color)', color: "var(--background-color)"}}>Easy Apply</Button>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
export default Joblist