import {React,useState} from'react'
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";



const Subscribe = () => {
    const [email, setEmail] = useState("")

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>and receive 30% of the First order</Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#f2f2f2"
        borderRadius="4px"
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></InputBase>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          variant="h6"
          sx={{ p: "10px", ":hover": { cursor: "pointer" } }}
        >
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
}

export default Subscribe
