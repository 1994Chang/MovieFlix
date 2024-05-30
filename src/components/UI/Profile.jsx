import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import avatar from '../../asset/avatar.png';

const Profile = ({userName,isOpen}) => {
  return (
    <>
        <Box className="user-profile">
          <Stack direction="row" alignItems="left" spacing={2} justifyContent="left">
          {isOpen ? (
            <>
              <Avatar src={avatar} alt={userName} className="avatar" />
              <Box className="user-info">
                <Typography variant="h6">{userName}</Typography>
              </Box>
            </>
          ) : (
            <Avatar src={avatar} alt={userName} className="avatar" />
          )}
          </Stack>
        </Box>
    </>
  )
}

export default Profile