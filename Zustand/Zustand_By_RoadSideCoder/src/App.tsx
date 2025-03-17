import { Box, Container, Typography } from "@mui/material"
import "./App.css"
import { useHabitStore } from "./store/store"
import AddHabitForm from "./component/add-habit-form"

function App() {
  const store = useHabitStore()
  console.log("Store", store)

  //
  return (
  <Container>
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Habit Tracker
      </Typography>
      {/* Form */}
      <AddHabitForm/>
      {/* List*/}
      {/* stats */}
    </Box>
  </Container>
  )
}

export default App
