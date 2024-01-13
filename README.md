<h1 align="center">
  @react-sandbox/heatmap
</h1>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/react-sandbox/heatmap/playwright.yml" alt="Build status" />
  <img src="https://img.shields.io/bundlephobia/minzip/@react-sandbox/heatmap?color=%234ba0f6" alt="Build size" />
  <img src="https://img.shields.io/npm/dt/@react-sandbox/heatmap?color=%234ba0f6" alt="Package downloads" />
</p>

<p align="center">
  <img src="example.png" alt="Example" />
</p>

<p align="center">
  📅🔥 Calendar heatmap component
</p>

<p align="center">
  Customizable SVG inspired by GitHub's contribution graph.
</p>

### Install

Install the `@react-sandbox/heatmap` package:

```
npm install @react-sandbox/heatmap
```

### Import

Import the `Heatmap` component:

```tsx
import React from 'react'
import Heatmap from '@react-sandbox/heatmap'

const values = [
  { date: new Date('2023-01-01T00:00:00'), count: 5 },
  { date: new Date('2023-01-05T00:00:00'), count: 10 },
  { date: new Date('2023-01-15T00:00:00'), count: 7 },
  { date: new Date('2023-02-08T00:00:00'), count: 3 }
  // ...
]

function App() {
  return (
    <div style={{ width: '500px' }}>
      <Heatmap
        startDate={new Date('2022-12-30T00:00:00')}
        values={values}
        emptyColor={[20, 30, 30]}
        baseColor={[0, 128, 0]}
        scaleFactor={35}
      />
    </div>
  )
}
```

### Props

| Prop          | Type                  | Default        | Description                                                 |
| ------------- | --------------------- | -------------- | ----------------------------------------------------------- |
| `startDate`   | `Date`                | **required**   | Start date                                                  |
| `values`      | `Array<Object>`       | **required**   | Array of values containing `date: Date` and `count: number` |
| `emptyColor`  | `RGB Tuple`           | `[20, 30, 30]` | Color of day with 0 `count`                                 |
| `baseColor`   | `RGB Tuple`           | `[0, 128, 0]`  | Color of day with 1 or more `count`                         |
| `scaleFactor` | `number`              | `10`           | Multiplier to be used against `baseColor`                   |
| `className`   | `string`              | `-`            | CSS classes                                                 |
| `style`       | `React.CSSProperties` | `-`            | CSS styles                                                  |

## Development

### Local

```
pnpm install
pnpm dev
```

### Tests

```
pnpm test
```

### Example

Inside `test/`:

```
pnpm install
pnpm dev
```

## License

MIT
