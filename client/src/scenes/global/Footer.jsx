import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../Theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
    <Box
    width="80%"
    margin="auto"
    display="flex"
    justifyContent="space-between"
    flexWrap="wrap"
    rowGap="30px"
    columnGap="clamp(20px,30,40px)"
    >
      <Box
      width="clamp(20%,30%, 40%)"
      >
        <Typography
        variant="h4"
        fontWeight="bold"
        mb="30px"
        color={shades.secondary[500]}
        >SHOPPING FEED</Typography>
      </Box>
      
    </Box>
  </Box>;
};

export default Footer;
