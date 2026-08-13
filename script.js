/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #ffffff;
    color: #171717;
    line-height: 1.6;
}


/* =========================
   NAVIGATION
========================= */

header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #eeeeee;
}

nav {
    max-width: 1100px;
    margin: auto;
    padding: 20px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav h2 {
    font-size: 22px;
    font-weight: 700;
}

.nav-links {
    display: flex;
    gap: 28px;
}

.nav-links a {
    color: #555;
    text-decoration: none;
    font-size: 14px;
    transition: 0.2s;
}

.nav-links a:hover {
    color: #000;
}


/* =========================
   MAIN
========================= */

main {
    max-width: 1100px;
    margin: auto;
}


/* =========================
   HERO
========================= */

#hero {
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 80px 30px;
}

.intro {
    color: #666;
    font-size: 18px;
    margin-bottom: 10px;
}

#hero h1 {
    font-size: clamp(55px, 9vw, 100px);
    line-height: 1;
    letter-spacing: -4px;
    margin-bottom: 20px;
}

#hero h2 {
    font-size: clamp(22px, 4vw, 36px);
    font-weight: 500;
    color: #555;
    margin-bottom: 25px;
}

#hero > p:not(.intro) {
    max-width: 600px;
    font-size: 18px;
    color: #666;
}

.buttons {
    display: flex;
    gap: 15px;
    margin-top: 35px;
}

.buttons a {
    display: inline-block;
    padding: 13px 24px;

    border: 1px solid #111;
    border-radius: 6px;

    text-decoration: none;
    color: #111;

    font-size: 14px;
    transition: 0.2s;
}

.buttons a:first-child {
    background: #111;
    color: white;
}

.buttons a:hover {
    transform: translateY(-2px);
}


/* =========================
   SECTIONS
========================= */

section {
    padding: 110px 30px;
    border-top: 1px solid #eeeeee;
}

section > h2 {
    font-size: 40px;
    margin-bottom: 40px;
    letter-spacing: -1px;
}


/* =========================
   ABOUT
========================= */

#about p {
    max-width: 750px;
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
}


/* =========================
   SKILLS
========================= */

.skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.skill {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 25px;

    transition: 0.2s;
}

.skill:hover {
    border-color: #999;
    transform: translateY(-3px);
}

.skill h3 {
    margin-bottom: 8px;
}

.skill p {
    color: #666;
}


/* =========================
   PROJECTS
========================= */

.project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.project {
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 30px;

    transition: 0.25s;
}

.project:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.project h3 {
    font-size: 23px;
    margin-bottom: 15px;
}

.project p {
    color: #666;
    margin-bottom: 15px;
}

.project .tech {
    font-size: 13px;
    color: #333;
}

.project a {
    color: #111;
    font-weight: 600;
    text-decoration: none;
}


/* =========================
   EXPERIENCE
========================= */

.experience-item {
    border-left: 2px solid #111;
    padding-left: 25px;
    margin-bottom: 45px;
}

.experience-item h3 {
    font-size: 24px;
    margin-bottom: 5px;
}

.experience-item > p:first-of-type {
    color: #777;
    font-size: 14px;
    margin-bottom: 12px;
}

.experience-item > p:last-child {
    max-width: 700px;
    color: #555;
}


/* =========================
   CONTACT
========================= */

#contact p {
    color: #666;
    margin-bottom: 25px;
}

#contact > a {
    display: inline-block;
    background: #111;
    color: white;

    padding: 14px 25px;

    border-radius: 6px;
    text-decoration: none;

    margin-bottom: 25px;
}

.social-links {
    display: flex;
    gap: 25px;
}

.social-links a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
}


/* =========================
   FOOTER
========================= */

footer {
    border-top: 1px solid #eeeeee;
    text-align: center;
    padding: 30px;
    color: #888;
    font-size: 13px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

    nav {
        padding: 18px 20px;
    }

    .nav-links {
        display: none;
    }

    #hero {
        padding: 70px 20px;
        min-height: 80vh;
    }

    #hero h1 {
        letter-spacing: -2px;
    }

    section {
        padding: 75px 20px;
    }

    section > h2 {
        font-size: 32px;
    }

    .skills-container,
    .project-container {
        grid-template-columns: 1fr;
    }

    .buttons {
        flex-direction: column;
        align-items: flex-start;
    }
}