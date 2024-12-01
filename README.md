<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <h1>My Personal Website</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>Hello! I'm Nysret Ukaj, a Programmer. Welcome to my personal website!</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="project">
      <h3>Project 1</h3>
      <p>Description of your first project.</p>
    </div>
    <div class="project">
      <h3>Project 2</h3>
      <p>Description of your second project.</p>
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Feel free to reach out to me at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
  </section>

  <footer>
    <p>&copy; 2024 Your Name. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

/* General Reset */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header {
  background: #333;
  color: #fff;
  padding: 1em 0;
  text-align: center;
}

header nav ul {
  list-style: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin: 0 15px;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
}

section {
  padding: 2em;
  text-align: center;
}

.project {
  margin: 1em 0;
  border: 1px solid #ccc;
  padding: 1em;
}

footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1em 0;
}

// JavaScript functionality (optional)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to my personal website!');
});


