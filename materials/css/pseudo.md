# Pseudo-classes and pseudo-elements

## Pseudo-classes
A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).

### Examples of pseudo-classes:
1. `:hover` - applies styles when the user hovers over an element.
2. `:active` - applies styles when an element is being activated (e.g., clicked).
3. `:focus` - applies styles when an element has focus (e.g., when a user clicks on an input field).
4. `:focus-within` - applies styles to an element if it or any of its descendants have focus.
5. `:focus-visible` - applies styles to an element when it receives focus and the focus is visible (e.g., when navigating with a keyboard).
6. `:target` - applies styles to an element that is the target of a URL fragment (e.g., `#section1`).
7. `:visited` - applies styles to links that have been visited by the user.
8. `:link` - applies styles to links that have not been visited by the user
9. `:enabled` - applies styles to elements that are enabled (e.g., `<input>` elements that are not disabled).
10. `:disabled` - applies styles to elements that are disabled (e.g., `<input disabled>`).
11. `:checked` - applies styles to checked elements (e.g., `<input type="checkbox" checked>`).
12. `:empty` - applies styles to elements that have no children (including text nodes).
13. `:first-child` - applies styles to the first child of a parent element.
14. `:last-child` - applies styles to the last child of a parent element.
15. `:nth-child(n)` - applies styles to the nth child of a parent element.
16. `:not(selector)` - applies styles to elements that do not match the specified selector.
Example: `:not(.active)` applies styles to all elements that do not have the class "active".

### Example of using pseudo-classes:
```css
.button:hover {
  background-color: blue;
}

.input:focus {
  outline: 2px solid orange;
}

.link:visited {
    color: purple;
}
```

### LVHA (Link, Visited, Hover, Active)
When styling links, it's important to remember the order of pseudo-classes: `:link`, `:visited`, `:hover`, and `:active`.
This order is crucial because it determines how the styles are applied to links. The correct order is:
1. `:link` - styles for unvisited links.
2. `:visited` - styles for visited links.
3. `:hover` - styles for links when the user hovers over them.
4. `:active` - styles for links when they are being activated (e.g., clicked).
If you do not follow this order, some styles may not be applied correctly. For example, if you place `:hover` before `:link`, the hover styles may not work as expected for unvisited links.

## Pseudo-elements
A pseudo-element is a keyword added to a selector that allows you to style specific parts of an element.
Pseudo-elements are typically used to style the first line, first letter, or to insert content before or after an element.

### Examples of pseudo-elements:
1. `::before` - allows you to insert content before the content of an element. `content` property is required and used
to specify the content to be inserted.
will insert the text "Before " before the content of the element.
2. `::after` - allows you to insert content after the content of an element. `content` property is also required.
3. `::first-line` - allows you to style the first line of an element.
4. `::first-letter` - allows you to style the first letter of an element.
5. `::selection` - allows you to style the portion of an element that is selected by the user (e.g., when highlighting text).
6. `::placeholder` - allows you to style the placeholder text of an input field.
7. `::marker` - allows you to style the marker box of list items (e.g., bullets or numbers).

### Example of using pseudo-elements:
```css
.element::before {
  content: "Before ";
}

.element::after {
  content: " After";
}

.element::first-line {
  font-weight: bold;
}

.element::first-letter {
  font-size: 2em;
}
```
