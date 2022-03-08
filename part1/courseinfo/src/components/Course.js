import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Course = ({ course }) => {
  const totalExercies = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer totalExercies={totalExercies} />
    </div>
  )
}

export default Course