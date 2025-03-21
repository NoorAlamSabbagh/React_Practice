import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// <===================persist===================>
// persist is a middleware that enables saving the store state to localStorage.
// The { name: "counter-storage" } option defines the key in localStorage.
// The getStorage option allows using sessionStorage or other custom storage.


const courseStore = (set) => ({//set is a function that allows us to update the store state of any variable or any information object`
    courses: [], //Iniitial state of the store which I am trying to manipulate
    addCourse: (course) => {
        console.log('CourseStore set', set);
        console.log('CourseStore course', course);
        set((state) => ({//set is going t provide the acces of the current state of the store
            courses: [course, ...state.courses]//...state.courses is a spread operator that copies the previous state 
        }));
        console.log('CourseStore state', state);
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
