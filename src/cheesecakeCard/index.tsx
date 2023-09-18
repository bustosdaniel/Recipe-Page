import { Box, Stack, Typography } from "@mui/material";
import TableRowsIcon from "@mui/icons-material/TableRows";

export default function ChessecakeInformation() {
  return (
    <Box marginTop="32px">
      <Typography
        fontSize={{ sx: "24px", md: "48px" }}
        fontWeight="700"
        marginBottom="12px"
      >
        Classic Cheesecake Recipe
      </Typography>
      <Stack
        flexDirection="row"
        justifyContent={{ sx: "space-between", md: "flex-start" }}
        alignItems="flex-start"
      >
        <TableRowsIcon htmlColor="#C4C4C4" fontSize="small" />
        <Typography
          fontSize="14px"
          fontWeight="500"
          margin="0 0 24px 12px"
          color="#4F4F4F"
          width={{ sx: "345pc", sm: "345px", md: "592px" }}
        >
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </Typography>
      </Stack>
      <Box height={{ sx: "202px", md: "604px" }} margin="0 auto 24px">
        <img
          src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2023/07/28/64c382f788b06.r_d.1610-872-0.jpeg"
          alt="photo"
          width="100%"
          height="100%"
          style={{
            borderRadius: "12px",
          }}
        />
      </Box>
    </Box>
  );
}
