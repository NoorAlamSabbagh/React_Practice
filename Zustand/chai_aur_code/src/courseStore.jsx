import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const courseStore = (set) => ({//set is a function that allows us to update the store
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses]//...state.courses is a spread operator that copies the previous state 
        }));
    },
    removeCourse: (courseId) => {
        set((state) => ({               
            courses: state.courses.filter((course) => course.id !== courseId)
        }));
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === completed ?
             {...course, completed: !course.completed } : course)
            }));
    },
})

const useCourseStore = create(
    devtools(
        persist(courseStore, {
             name: 'courses' 
            })
        )
    );

export default useCourseStore;



// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))
