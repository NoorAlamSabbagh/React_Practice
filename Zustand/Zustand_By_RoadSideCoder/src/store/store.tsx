import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Habit {
    id: String;
    name: String;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface HabitState {
    habits: Habit[];
    addHabit: (name: string, frequency: "daily" | "weekly") => void
}

const useHabitStore = create<HabitState>()(devtools((set, get) =>{
    return {
     habits: [],
     addHabit: (name, frequency) => set((state)=>{
         return {
            habits: [
                ...state.habits,
             {
                id: Date.now().toString(),
                name,
                frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
             }
            ]
         }
     }),
    }
})
);

export default useHabitStore;