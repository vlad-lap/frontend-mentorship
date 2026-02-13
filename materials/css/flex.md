# CSS Flexbox

Flexbox, or the Flexible Box Layout, is a CSS layout module that provides an efficient way to arrange and align items within a container.
It allows for responsive design and dynamic layouts without the need for complex calculations or floats.

The main features of Flexbox include:
1. **Flex Container**: The parent element that contains the flex items.
It is defined by setting `display: flex` or `display: inline-flex` on the container.

2. **Flex Items**: The child elements of the flex container that are laid out according to the flexbox rules.

3. **Main Axis and Cross Axis**: The main axis is the primary axis along which flex items are laid out (horizontal by default),
while the cross axis is perpendicular to the main axis (vertical by default).

4. **Flex Direction**: The direction in which flex items are laid out.
It can be set to `row`, `row-reverse`, `column`, or `column-reverse`.

5. **Justify Content**: Controls the alignment of flex items along the main axis.
It can be set to `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, or `space-evenly`.

6. **Align Items**: Controls the alignment of flex items along the cross axis.
It can be set to `stretch`, `flex-start`, `flex-end`, `center`, or `baseline`.

7. **Flex Wrap**: Determines whether flex items should wrap onto multiple lines when they exceed the container's width.
It can be set to `nowrap`, `wrap`, or `wrap-reverse`.

8. **Flex Grow, Flex Shrink, and Flex Basis**: These properties control how flex items grow, shrink, and take up space within the container.

9. **Align Content**: Controls the alignment of multiple lines of flex items when there is extra space in the cross axis.
It can be set to `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, or `space-around`.

10. **Order**: Allows you to change the order of flex items without affecting the source order in the HTML.

## Example
```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.flex-item {
  background-color: lightblue;
  padding: 20px;
  margin: 10px;
}
```
In this example, we have a flex container with three flex items.
The items are arranged in a row, spaced evenly around the container, and aligned to the center along the cross axis.
