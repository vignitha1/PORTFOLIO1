# Vignitha Katthulwar Portfolio

A clean, modern, responsive personal portfolio website built for a full stack development college assignment using HTML5, CSS3, Bootstrap 5, and JavaScript ES6+.

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript ES6+
- Google Fonts

## Features

- Sticky responsive navbar
- Modern dark-themed hero section
- About, Education, Skills, Projects, Achievements and Contact sections
- Project filtering buttons
- Contact form validation
- Theme toggle (dark/light mode)
- Smooth scrolling navigation
- Mobile-friendly layout
- Accessibility-friendly structure

## Folder Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── profile.jpg
├── assets/
│   └── resume.pdf
├── README.md
```

## How to Run in VS Code

1. Open the folder `portfolio` in VS Code.
2. Open `index.html`.
3. Right-click the file and choose `Open with Live Server` if the extension is installed.
4. Or use the Go Live extension to preview the project in the browser.

## How to Use Live Server

1. Install the Live Server extension in VS Code.
2. Open `index.html`.
3. Click the `Go Live` button in the bottom-right corner of the editor.
4. Your portfolio will open in the browser automatically.

## How to Replace the Profile Image

1. Place your new image inside the `images` folder.
2. Rename the file to `profile.jpg` or update the `src` path in `index.html`.
3. Example:

```html
<img src="images/profile.jpg" alt="Your Name profile portrait" />
```

## How to Replace the Resume

1. Add your PDF file inside the `assets` folder.
2. Rename it to `resume.pdf` or update the file path in `index.html`.
3. Example:

```html
<a href="assets/resume.pdf" target="_blank">Download Resume</a>
```

## How to Replace GitHub and LinkedIn Links

Update the placeholder links in `index.html`:

```html
<a href="https://github.com/" target="_blank">GitHub</a>
<a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
```

Replace the placeholder URLs with your actual profile links.

## GitHub Pages Deployment

1. Push the project to a GitHub repository.
2. Open the repository in GitHub.
3. Go to `Settings` → `Pages`.
4. Choose the branch to deploy, usually `main`.
5. Select the root folder or `docs` folder depending on your setup.
6. Save the settings.
7. GitHub will provide a live URL for your portfolio.

## Notes

- This project is intentionally beginner-friendly and easy to explain in a viva.
- You can replace all demo text and placeholder links with your own personal information.
- The design uses a modern dark color theme with gradient accents and glassmorphism effects.
