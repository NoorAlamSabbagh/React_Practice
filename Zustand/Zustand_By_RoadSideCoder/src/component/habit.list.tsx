import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import useHabitStore from "../store/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const HabitList = () => {
    const { habits } = useHabitStore();
    const today = new Date().toISOString().split("T")[0];
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
            {habits.map((habit) => (
                <Paper key={String(habit.id)} elevation={2} sx={{ p: 2 }}>
                    <Grid xs={12} sm={6}>
                        <Typography variant="h6">{habit.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {habit.frequency}
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                            <Button variant="outlined"
                            color= {habit.completedDates.includes(today) ? "success" : "primary"}
                            startIcon={<CheckCircleIcon/>}
                            >
                                {
                                    habit.completedDates.includes(today) ? "Completed" : "Mark Complete"
                                }
                            </Button>
                            <Button variant="outlined" color="error">Remove</Button>
                        </Box>
                    </Grid>
                </Paper>
            ))}
        </Box>
    );
}

export default HabitList