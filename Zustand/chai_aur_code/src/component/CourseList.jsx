import React from 'react';
import useCourseStore from '../courseStore';
import { shallow } from "zustand/shallow";

const CourseList = () => {
    const courses = useCourseStore((state) => state.courses, shallow);
    console.log('CourseList rendered', courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

    return (
        <ul>
            {courses.map((course) => (
                <li 
                    key={course.id} 
                    className="course-item"
                    style={{
                        backgroundColor: course.completed ? '#00FF0044' : 'transparent',
                    }}
                >
                    <span className="course-item-col-1">
                        <input
                            type="checkbox"
                            checked={course.completed}
                            onChange={() => toggleCourseStatus(course.id)}
                        />
                    </span>
                    <span>{course?.title}</span>
                    <button
                        onClick={() => removeCourse(course.id)}
                        className='delete-btn'
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CourseList;
