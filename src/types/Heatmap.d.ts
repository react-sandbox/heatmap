import { DateWithCount, RGB } from '.'

export interface HeatmapProps {
  startDate: Date
  values: DateWithCount[]
  emptyColor?: RGB
  baseColor?: RGB
  scaleFactor?: number
  className?: string
  style?: React.CSSProperties
}
