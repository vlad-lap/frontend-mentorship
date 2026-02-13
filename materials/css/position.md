# CSS Positioning

The `position` property in CSS is used to specify the positioning method of an element. It determines how an element
is positioned in the document and how it interacts with other elements.
The following are the different values for the `position` property:

1. `static` - This is the default value. 
The element is positioned according to the normal flow of the document.
It does not respond to top, right, bottom, or left properties.

2. `relative` - The element is positioned relative to its normal position.
It can be moved using the top, right, bottom, and left properties, but it still occupies its original space in the document flow.

3. `absolute` - The element is positioned relative to its nearest positioned ancestor (an ancestor with a position other than static).
If there is no such ancestor, it is positioned relative to the initial containing block (usually the viewport).
It is removed from the normal document flow and can be moved using the top, right, bottom, and left properties.

4. `fixed` - The element is positioned relative to the viewport, which means it stays in the same position even when the page is scrolled.
It is removed from the normal document flow and can be moved using the top, right, bottom, and left properties.

5. `sticky` - The element is positioned based on the user's scroll position.
It toggles between relative and fixed positioning depending on the scroll position.
It is treated as relative until it crosses a specified threshold (defined by top, right, bottom, or left), at which point it becomes fixed.