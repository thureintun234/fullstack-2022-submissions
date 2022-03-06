import React from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <table cellPadding={5}>
      <thead></thead>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default StatisticLine