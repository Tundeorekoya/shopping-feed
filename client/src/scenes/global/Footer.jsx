import { Box, Typography } from "@mui/material";
import { shades } from "../../Theme";

const Footer = () => {

  return (
    <Box mt="70px" p="40px 0" backgroundColor="#f2f2f2">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%,30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            SHOPPING FEED
          </Typography>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum odio
            reiciendis assumenda magni ullam a consequuntur doloremque earum,
            adipisci perspiciatis, repudiandae doloribus? Iusto numquam odio
            illo nesciunt reprehenderit dolores autem.
          </div>
        </Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            sx={{ ":hover": { cursor: "pointe" } }}
          >
            About Us
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Careers
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Our Stores
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Term & Conditions
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Privacy Policy
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            sx={{ ":hover": { cursor: "pointe" } }}
          >
            Customer Care
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Help Center
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Track Your Order
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Corporate & Bulk Purchasing
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Return & Refunds
          </Typography>
        </Box>

        <Box width="clamp(20%,25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
           7A Oduduwa Road Off Victoria Island Lagos.
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            Shopping Feed@gmail.com
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointe" } }}>
            +23456789
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
