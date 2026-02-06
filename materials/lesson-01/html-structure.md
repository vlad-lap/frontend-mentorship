# HTML document structure

An HTML document is structured in a specific way to ensure that it is properly interpreted by web browsers.
The basic structure of an HTML document includes the following elements:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
    </style>
    <script src="script.js"></script>
</head>
<body>
    <header>
        <h1>This is a Heading</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>Welcome to the home section of the page.</p>
            <button>Start</button>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>This section contains information about the page.</p>
        </section>
        <section id="contact">
            <h2>Contact Section</h2>
            <p>Get in touch with us through this section.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2026 Vlad. All rights reserved.</p>
    </footer>
</body>
</html>
```
- `<!DOCTYPE html>`: This declaration defines the document type and version of HTML being used. It helps browsers to render the page correctly.
- `<html lang="en">`: The root element of the HTML document. The `lang` attribute specifies the language of the document.
- `<head>`: Contains meta-information about the document, such as the title, character encoding, and links to stylesheets and scripts.
- `<meta charset="UTF-8">`: Specifies the character encoding for the document, ensuring that it can display a wide range of characters correctly.
- `<title>`: Sets the title of the page, which is displayed in the browser tab and used by search engines.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures that the page is responsive and displays correctly on different devices.
- `<link rel="icon" href="favicon.ico">`: Links to the favicon, which is the small icon displayed in the browser tab.
- `<link rel="stylesheet" href="styles.css">`: Links to an external CSS file that contains styles for the page.
- `<style>`: Contains internal CSS styles that apply to the document. In this example, it sets the font family and removes default margins and padding from the body.
- `<script src="script.js"></script>`: Links to an external JavaScript file that contains scripts for the page.
- `<body>`: Contains the content of the document that is displayed to the user, such as headings, paragraphs, images, and other elements.

## Semantic tags
In addition to the basic structure, HTML5 introduced semantic tags that provide meaning to the content. These tags help improve accessibility and SEO by clearly defining the purpose of different sections of the page. Some common semantic tags include:
- `<header>`: Represents the introductory content or a group of navigational links.
- `<main>`: Represents the main content of the document, which is unique and central to the page. It should not contain content that is repeated across multiple pages, such as sidebars or navigation links.
- `<nav>`: Represents a section of the page that contains navigation links.
- `<section>`: Represents a standalone section of content that is thematically related.
- `<article>`: Represents a self-contained piece of content that could be distributed independently.
- `<aside>`: Represents content that is tangentially related to the main content, such as a sidebar or a callout box.
- `<footer>`: Represents the footer of a document or a section, typically containing information about the author, copyright, or links to related documents.

## Accessibility (a11y)
Using semantic tags and proper HTML structure is crucial for accessibility.
Screen readers and other assistive technologies rely on the structure of the HTML document to navigate and interpret the content.
By using semantic tags, you can ensure that your website is accessible to a wider audience, including those with disabilities.
For example, using `<nav>` for navigation links allows screen readers to identify and navigate through the menu easily,
while using `<main>` helps users understand where the main content of the page is located.

It is also important to use appropriate ARIA (Accessible Rich Internet Applications) attributes and to ensure that
interactive elements, such as buttons and links, are keyboard accessible.
Labeling form elements properly and providing alternative text for images are also essential for improving accessibility.

Examples of accessible HTML elements include:
```html
<button aria-label="Start the process">Start</button>
<a href="#contact" aria-label="Go to contact section">Contact Us</a>

<label for="email">Email:</label>
<input type="email" id="email" name="email" aria-required="true">

<img src="image.jpg" alt="Description of the image">
```