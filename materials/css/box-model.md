# CSS Box model

The CSS box model is a fundamental concept in web design that describes how elements are structured and how they interact
with each other on a webpage. It consists of several layers that define the size and spacing of elements.
The main components of the CSS box model are:
1. **Content**: This is the innermost layer of the box model, where the actual content of the element is displayed.
It can include text, images, or other media.
2. **Padding**: This layer surrounds the content and provides space between the content and the border.
Padding can be set to different values for each side of the element (top, right, bottom, left) or can be set uniformly for all sides.
3. **Border**: This layer surrounds the padding and content. It can be styled with different widths, colors, and styles
(solid, dashed, dotted, etc.). The border can also be set to different values for each side of the element.
4. **Margin**: This is the outermost layer of the box model, which provides space between the element and other elements on the page.
Like padding and border, margins can be set to different values for each side of the element or uniformly for all sides.

## Box-sizing
The `box-sizing` property in CSS allows you to control how the total width and height of an element are calculated.
By default, the `box-sizing` property is set to `content-box`, which means that the width and height of an element
are calculated based on the content only, excluding padding and border.
This can lead to unexpected results when you add padding or borders to an element, as it will increase the total size of the element.
To include padding and border in the total width and height of an element, you can set the `box-sizing` property to `border-box`.
When `box-sizing: border-box` is applied, the width and height of the element will include the content, padding, and border,
making it easier to manage the size of elements and create consistent layouts.
For example, if you set an element's width to 200px and add 20px of padding and a 5px border, the total width of the element
will still be 200px when `box-sizing: border-box` is used, whereas it would be 245px with the default `content-box` setting.