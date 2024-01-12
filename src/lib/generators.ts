import { RGB, DateWithCount } from '../types'
import { DAYS_IN_YEAR, SQUARE_SIZE, HORIZONTAL_GAP_SIZE } from './constants'

// TODO Merge days with counts from values prop
export function generateDays(startDate: string): DateWithCount[] {
  const days = [] as DateWithCount[]
  const currentDate = new Date(startDate)

  for (let i = 0; i < DAYS_IN_YEAR; i++) {
    const date = {
      date: new Date(currentDate),
      count: Math.floor(Math.random() * 10)
    }

    days.push(date)
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return days
}

export function generateWeeks(days: DateWithCount[]): DateWithCount[][] {
  const weeks = [] as DateWithCount[][]
  let currentWeek = [] as DateWithCount[]

  days.forEach(day => {
    const currentDay = new Date(day.date)

    currentWeek.push({ date: day.date, count: day.count })

    if (currentDay.getDay() === 6) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  })

  // Add last week if not complete
  if (currentWeek.length > 0) {
    weeks.push([...currentWeek])
  }

  return weeks
}

export function generateWeekTransform(weekIndex: number): string {
  return `translate(${weekIndex * (SQUARE_SIZE + HORIZONTAL_GAP_SIZE)}, 0)`
}

function convertRGBToString(rgb: RGB): string {
  return `rgb(${rgb.join(',')})`
}

export function generateCountColor(
  count: number,
  baseColor: RGB = [0, 128, 0]
): string {
  if (count === 0) {
    // TODO Add prop for 0 commmit color
    const defaultColor = [169, 169, 169] as RGB

    return convertRGBToString(defaultColor)
  }

  // TODO Add prop for scaling factor
  const scaleFactor = Math.min(1, count / 30)

  const finalColor = baseColor.map(channel =>
    Math.round(channel + (255 - channel) * scaleFactor)
  ) as RGB

  return convertRGBToString(finalColor)
}
