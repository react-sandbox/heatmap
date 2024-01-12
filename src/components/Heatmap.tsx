import React from 'react'
import { Coordinate } from '../types'
import { HeatmapProps } from '../types/Heatmap'
import { SQUARE_SIZE, SQUARE_RADIUS, VERTICAL_OFFSET } from '../lib/constants'
import {
  generateDays,
  generateWeeks,
  generateWeekTransform,
  generateCountColor
} from '../lib/generators'

const Heatmap: React.FC<HeatmapProps> = ({
  startDate,
  values,
  emptyColor = [169, 169, 169],
  baseColor = [0, 128, 0],
  scaleFactor = 30,
  className,
  style
}) => {
  console.log(values)

  const renderYear = (startDate: string): JSX.Element[] => {
    const days = generateDays(startDate)
    const weeks = generateWeeks(days)
    console.log('days', days)
    console.log('weeks', weeks)

    return weeks.map((week, index) => renderWeek(week, index))
  }

  const renderWeek = (week, weekIndex: number): JSX.Element => {
    return (
      <g key={weekIndex} transform={generateWeekTransform(weekIndex)}>
        {week.map(day => {
          const coord = [0, day.date.getDay() * VERTICAL_OFFSET] as Coordinate
          const color = generateCountColor(
            day.count,
            emptyColor,
            baseColor,
            scaleFactor
          )

          return renderDay(coord, color)
        })}
      </g>
    )
  }

  const renderDay = (coord: Coordinate, color: string): JSX.Element => {
    const [x, y] = coord

    return (
      <rect
        width={SQUARE_SIZE}
        height={SQUARE_SIZE}
        rx={SQUARE_RADIUS}
        ry={SQUARE_RADIUS}
        x={x}
        y={y}
        fill={color}
      />
    )
  }

  return (
    <svg
      data-sandbox-heatmap
      viewBox={`0 0 635 82`}
      className={className}
      style={style}
    >
      <g>{renderYear(startDate)}</g>
    </svg>
  )
}

export default Heatmap
