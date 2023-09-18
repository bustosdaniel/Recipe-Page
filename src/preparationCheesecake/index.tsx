import { Box, Typography, Checkbox, Stack } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Ingredients = [
  {
    id: 1,
    info: "1 and 1/2 cups (150g)",
    info2: " graham cracker crumbs ",
    info3: "(about 10 full sheet graham crackers)",
  },
  {
    id: 2,
    info: "5 Tablespoons (70g)",
    info2: " unsalted butter ",
    info3: "melted",
  },
  {
    id: 3,
    info: "1/4 cup (50g)",
    info2: " granulated sugar",
  },
];

const Chessecake = [
  {
    id: 1,
    info: "four 8-ounce blocks (904g) full-fat",
    info2: " cream cheese, ",
    info3: "softened to room temperature",
  },
  {
    id: 2,
    info: "1 cup (200g)",
    info2: " granulated sugar",
  },
  {
    id: 3,
    info: "1 cup (240g) full-fat,",
    info2: " sour cream ",
    info3: "at room temperature",
  },
  {
    id: 4,
    info: "1 teaspoon ",
    info2: " pure vanilla extract ",
  },
  {
    id: 5,
    info: "2 teaspoons",
    info2: " fresh lemon juice ",
    info3: "(optional, but recommended)",
  },
  {
    id: 6,
    info: "3 large",
    info2: " eggs, ",
    info3: "at room temperature",
  },
  {
    id: 7,
    info: "topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) ",
  },
];

const CookInfo = [
  {
    id: 1,
    title: "Prep Time",
    subtitle: "45 minutes",
  },
  {
    id: 2,
    title: "Cook Time",
    subtitle: "1 hour",
  },
  {
    id: 3,
    title: "Total Time",
    subtitle: "7,75 hours",
  },
];

export default function PreparationChessecake() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box>
      <Stack
        position={{ md: "relative" }}
        flexDirection={{ xs: "column", md: "row-reverse" }}
        alignItems={{ md: "center" }}
        justifyContent={{ md: "space-between" }}
      >
        <Box
          margin={{ md: "0 0 24px" }}
          borderRadius={{ md: "10px" }}
          padding={{ md: "20px 40px" }}
          boxShadow={{ md: "10px 10px 14px 5px rgba(186,186,186,0.48)" }}
        >
          <Stack flexDirection="row" alignItems="center">
            <LocalDiningIcon fontSize="medium" htmlColor="#F2994A" />
            <Box marginLeft="6px">
              <Typography
                fontSize="12px"
                fontWeight="700"
                color="#BDBDBD"
                textTransform="uppercase"
              >
                yields
              </Typography>
              <Typography fontSize="12px" fontWeight="500" color="#F2994A">
                12 servings
              </Typography>
            </Box>
          </Stack>
          <Stack
            flexDirection={{ xs: "row", md: "column" }}
            alignItems="center"
            justifyContent="space-between"
            marginTop="15px"
          >
            {CookInfo.map((item) => (
              <Stack flexDirection="row" alignItems="center" key={item.id}>
                <AccessTimeIcon fontSize="medium" />
                <Box marginLeft="6px" paddingY="10px">
                  <Typography
                    color="#BDBDBD"
                    fontSize="12px"
                    fontWeight="700"
                    textTransform="uppercase"
                  >
                    {item.title}
                  </Typography>
                  <Typography fontSize="12px" fontWeight="500">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
        <Box alignSelf={{ md: "flex-start" }}>
          <Typography fontSize="18px" fontWeight="700" marginBottom="14px">
            Ingredients
          </Typography>
          <Typography fontSize="16px" fontWeight="400" marginBottom="20px">
            Graham Cracker Crust
          </Typography>
          <Box marginBottom="40px">
            {Ingredients.map((item) => (
              <Stack
                key={item.id}
                flexDirection="row"
                alignItems="flex-start"
                marginBottom="6px"
              >
                <Checkbox
                  {...label}
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 28 },
                    padding: "0 12px 0 0",
                  }}
                />
                <Typography fontSize="14px" fontWeight="400">
                  {item.info}
                  <b>{item.info2}</b>
                  {item.info3}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Stack>
      <Box
        marginBottom="40px"
        position={{ md: "absolute" }}
        top={{ md: "1045px" }}
        width={{ md: "65%" }}
      >
        <Typography fontSize="18px" fontWeight="400" marginBottom="24px">
          Cheesecake
        </Typography>
        <Box>
          {Chessecake.map((item) => (
            <Stack
              key={item.id}
              flexDirection="row"
              alignItems="flex-start"
              marginBottom="6px"
            >
              <Checkbox
                {...label}
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                  padding: "0 12px 0 0",
                }}
              />
              <Typography fontSize="14px" fontWeight="400">
                {item.info}
                <b>{item.info2}</b>
                {item.info3}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
