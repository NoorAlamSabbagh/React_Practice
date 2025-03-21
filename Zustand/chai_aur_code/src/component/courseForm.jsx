

import React, { useState } from 'react'
import useCourseStore from '../courseStore'

const courseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse);
    const [courseTitle, setCourseTitle] = useState('');
    console.log('CourseForm rendered Revised', courseTitle);

    const handleCourseSubmit = (e) => {
        e.preventDefault();
        if (!courseTitle) return alert('Please enter a course title');
        addCourse({
            id: Math.ceil(Math.random() * 10000),
            title: courseTitle
        });
        setCourseTitle('');
    }
    return (
        <div className='form-container'>
            <input
                type='text'
                placeholder='Enter course title'
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className='form-input' />
            <button
                onClick={handleCourseSubmit}
                className='form-submit-btn'>
                Add Course
            </button>
        </div>
    )
}

export default courseForm;