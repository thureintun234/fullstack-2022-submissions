import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const totalExercies = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer totalExercies={totalExercies} />
    </div>
  );
}

export default App;
