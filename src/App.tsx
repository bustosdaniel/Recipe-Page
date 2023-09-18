import { Box } from "@mui/material";
import "./App.css";
import CheesecakeInformation from "./cheesecakeCard";
import PreparationChessecake from "./preparationCheesecake";
import InstructionsCheesecake from "./instructionsCheesecake";

function App() {
  return (
    <Box>
      <CheesecakeInformation />
      <PreparationChessecake />
      <InstructionsCheesecake />
    </Box>
  );
}

export default App;
