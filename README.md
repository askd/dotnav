# Dotnav

React component with dots and arrows, designed to navigate any of the sliders and galleries.

## Usage

```javascript
<Dotnav
  index={index}
  count={count}
  withArrows
/>
```

## [Demo](https://animakit.github.io/#/slider)

## Installation

```
npm install dotnav
```

## Properties

| Property | Required | Type | Default Value  | Available Values  | Description |
| ----- | ----- | ----- | ----- | ----- | ----- |
| index | true | number | 0 | From 0 to count - 1 | Current active dot  |
| count | true | number | 0 | Any number | The number of points |
| withArrows | false | bool | false | `true`, `false` | Whether arrows are visible or not |
| handleChange | true | func |  |  | Callback |
| classes | false | shape | `{ root: 'Dotnav', dots: 'Dotnav-dots', dot: 'Dotnav-dot', dotActive: 'Dotnav-dot Dotnav-dot_active', arrowPrev: 'Dotnav-arrow Dotnav-arrow_prev', arrowNext: 'Dotnav-arrow Dotnav-arrow_next' }` |  | Classnames for elements |

## Idea

Dotnav specially crafted for Animakit.
See https://animakit.github.io for more details.

<a href="https://evilmartians.com/?utm_source=dotnav">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>
