import React from 'react'
import { DateWithCount, Coordinate } from '../types'
import { HeatmapProps } from '../types/Heatmap'
import {
  SQUARE_SIZE,
  SQUARE_RADIUS,
  VERTICAL_OFFSET,
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT
} from '../lib/constants'
import {
  generateDays,
  generateWeeks,
  generateWeekTransform,
  generateCountColor
} from '../lib/generators'

const Heatmap: React.FC<HeatmapProps> = ({
  startDate,
  values,
  emptyColor = [20, 30, 30],
  baseColor = [0, 128, 0],
  scaleFactor = 10,
  className,
  style
}) => {
  const renderYear = (startDate: Date): JSX.Element[] => {
    const days = generateDays(startDate, values)
    const weeks = generateWeeks(days)

    return weeks.map((week, index) => renderWeek(week, index))
  }

  const renderWeek = (
    week: DateWithCount[],
    weekIndex: number
  ): JSX.Element => {
    const transform = generateWeekTransform(weekIndex)

    return (
      <g key={weekIndex} transform={transform}>
        {week.map((day, index) => {
          const { date, count } = day
          const coord = [0, date.getDay() * VERTICAL_OFFSET] as Coordinate
          const color = generateCountColor(
            count,
            emptyColor,
            baseColor,
            scaleFactor
          )

          return renderDay(index, coord, color)
        })}
      </g>
    )
  }

  const renderDay = (
    key: number,
    coord: Coordinate,
    color: string
  ): JSX.Element => {
    const [x, y] = coord

    return (
      <rect
        key={key}
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
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      className={className}
      style={style}
    >
      <g>{renderYear(startDate)}</g>
    </svg>
  )
}

export default Heatmap
