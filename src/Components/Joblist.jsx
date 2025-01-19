import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Joblist = () => {
  const jobs = useSelector((state) => state.job)
  console.log(jobs)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginTop: "40px", paddingLeft: '24px', paddingRight: '24px' }}>
      {
        jobs.map(job => (
          <Box sx={{ boxShadow: 3, maxWidth: 1200, padding: "10px", borderRadius: "10px" }} key={job.id}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>{job.title}</h1>
                <MoreVertIcon sx={{ cursor: "pointer" }} />
              </div>
              <p>{job.position}</p>
            </div>
          </Box>
        ))
      }
    </div>
  )
}
export default Joblist