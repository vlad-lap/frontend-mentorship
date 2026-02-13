# CSS priority

CSS priority determines which styles are applied to an element when there are conflicting rules. The priority is determined by the specificity of the selectors and the importance of the rules. The following is the order of CSS priority from highest to lowest:

1. !important rules - highest priority
2. Inline styles (inside an HTML element) - e.g., `<div style="color: red;"></div>`
3. ID selectors - e.g., `#header { color: blue; }`
4. Class selectors, attribute selectors, and pseudo-classes - e.g., `.menu { color: green; }`, `[type="text"] { color: yellow; }`, `:hover { color: orange; }`
5. Element selectors and pseudo-elements - e.g., `div { color: purple; }`, `::before { content: ''; }`
6. Universal selector (*) and inherited styles - lowest priority

## Example
```html
<p>Page content 1</p>
<p class="paragraph">Page content 2</p>
<p class="paragraph" id="some-paragraph">Page content 3</p>
<p class="paragraph" style="color: purple;">Page content 4</p>
```

```css
p {
    color: blue;
}

.paragraph {
    color: green;
}

#some-paragraph {
    color: red;
}
```
In the example above, the styles will be applied as follows:
1. *Page content 1* will be **blue**
2. *Page content 2* will be **green**, because class selector has higher priority than tag selector
3. *Page content 3* will be **red**, because ID selector has higher priority than tag and class selectors
4. *Page content 4* will be **purple**, because inline styles have higher priority than all of the above