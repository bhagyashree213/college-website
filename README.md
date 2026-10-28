# 🎓 Dr. D. Y. Patil School of Science & Technology — College Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://en.wikipedia.org/wiki/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-brightgreen?style=for-the-badge)](#features)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> A modern, responsive multi-page institutional portal designed for **Dr. D. Y. Patil School of Science & Technology**, Tathawade, Pune (Dr. D. Y. Patil Vidyapeeth).

---

## 🌐 Live Preview / GitHub Pages

Once deployed on GitHub Pages, the site can be accessed live at:
🔗 **[https://bhagyashree213.github.io/college-website/](https://bhagyashree213.github.io/college-website/)**

*(Follow the [Deployment Guide](#-how-to-enable-github-pages) below to enable it in 1 minute).*

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Pages Included](#-pages-included)
- [Project File Structure](#-project-file-structure)
- [Bugs & Issues Resolved](#-bugs--issues-resolved)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
- [How to Enable GitHub Pages](#-how-to-enable-github-pages)
- [Technology Stack](#-technology-stack)
- [Author & Acknowledgments](#-author--acknowledgments)

---

## 🏫 Overview

This website serves as the digital front desk and student informational gateway for the **Dr. D. Y. Patil School of Science & Technology**, Tathawade, Pune. It provides prospective and current students, parents, and faculty with comprehensive information on academic programs, admission criteria, campus life, upcoming events, exam circulars, and institutional achievements.

---

## ✨ Key Features

- **📢 Dynamic Announcement Ticker:** Real-time scrolling news ticker in the top header with auto-pause on hover for optimal readability.
- **🧭 Unified Navigation & Active Link Indication:** Cohesive header menu across all subpages with automatic detection of the active route.
- **📰 Multi-Column Information Hub:**
  - **Latest News:** Vertical scrolling bulletin of circulars and merit lists.
  - **Upcoming Events:** Event timeline featuring custom date badges.
  - **Notice Board:** Essential academic notices, scholarship alerts, and exam notifications.
- **📚 Comprehensive Course Catalog:** Dedicated Academics section highlighting undergraduate programs (B.Tech, BCA, B.Sc, B.Com, B.Pharm) with duration badges and program overviews.
- **📝 Admissions & Fee Matrix:** Clear eligibility breakdown (HSC, Diploma, VET/JEE Entrance requirements), fee details, and scholarship opportunities.
- **🖼️ Campus Photo Gallery:** Responsive photography grid featuring campus infrastructure, computer labs, auditoriums, robotics centers, and convocation ceremonies with smooth hover zoom animations.
- **💬 Interactive Inquiry & Contact Form:** Clean 2-column layout with campus contact details, helpline numbers, and an interactive contact form with client-side validation and instant success confirmation.
- **⭐ Parent Testimonials:** Styled feedback cards with star ratings, quotes, and parent testimonials.
- **📱 Fully Mobile Responsive:** Fluid layouts that seamlessly adapt from 4K desktops to mobile screens.

---

## 📄 Pages Included

| Page File | Page Name | Description |
|:---|:---|:---|
| [`index.html`](index.html) | **Home** | Announcement marquee, hero banner, news, events, notice board, leadership, and accreditation. |
| [`college.html`](college.html) | **About Us** | Institutional vision, research mentoring, campus infrastructure, and parent testimonials. |
| [`academics.html`](academics.html) | **Academics** | Degree program catalog (B.Tech, BCA, B.Sc, B.Com, B.E, B.Pharm, B.A) with course tags. |
| [`admission.html`](admission.html) | **Admissions** | Eligibility requirements, VET/JEE details, annual tuition fee structure, and financial aid. |
| [`gallery.html`](gallery.html) | **Gallery** | High-definition campus photo gallery showcasing labs, library, grounds, and celebrations. |
| [`contact.html`](contact.html) | **Contact Us** | Campus address, helpline numbers, emails, support hours, and interactive inquiry form. |
| [`contact us.html`](contact%20us.html) | **Contact (Legacy)** | Maintained for 100% backward compatibility with previous file naming. |
| [`about.html`](about.html) | **About (Alias)** | Smooth redirect alias to `college.html` to eliminate 404 errors. |

---

## 📂 Project File Structure

```text
college-website/
│
├── index.html            # Main Landing / Home Page
├── college.html          # About College & Parent Testimonials Page
├── academics.html        # Academic Programs & Course Information
├── admission.html        # Admission Eligibility & Fee Matrix
├── gallery.html          # Campus Life & Facilities Photo Gallery
├── contact.html          # Clean Contact Page with Interactive Inquiry Form
├── contact us.html       # Legacy Contact Page (Backward Compatibility)
├── about.html            # Redirect helper to college.html
│
├── styles.css            # Master Stylesheet (Design tokens, Grid, Components, Media Queries)
├── style.css             # Compatibility Stylesheet wrapper
├── style 2.css           # Compatibility Stylesheet wrapper
├── style1.css            # Compatibility Stylesheet wrapper
├── script.js             # Client-side validation, Form Feedback & Route Sync
│
├── README.md             # Project Documentation & Setup Guide
│
├── 22.jpg                # Main Campus Hero Banner
├── logo.jpg / logo1.jpg  # Institutional Logos
├── logo 2.png            # Alternate High-Res Logo
├── image.jpg / a.jpg     # Campus Infrastructure Photos
├── 11.png – 19.png       # Gallery Showcase Images
├── 20.png                # Contact Section Header Banner
├── 1.png – 4.png         # Testimonial Quotes & Rating Icons
├── b.png, c.png, d.png   # Quick Info Service Icons
├── e.png, f.png, g.png   # Dignitary Portraits & Certificate
└── tel.png, mail.png, fb.png, tw.png, in.png, li.png  # Contact & Social Media Icons
```

---

## 🛠️ Bugs & Issues Resolved

Before this update, only the raw files existed in the repository without documentation or cohesive interlinking. The following issues have been completely fixed:

1. **Broken Navigation Links:**
   - Previously, all navigation menu items (`Home`, `Academics`, `Admission`, `Gallery`, `Contact Us`) across multiple pages used dummy `href="#"` placeholders. All links now properly route to their respective pages.
2. **Missing Navigation Bars on Subpages:**
   - Subpages (`academics.html`, `admission.html`, `gallery.html`, `contact us.html`) were missing top headers and navigation bars entirely, stranding users without back navigation. A unified, responsive navigation system has been applied across all pages.
3. **Invalid HTML Syntax & Structural Errors:**
   - Fixed unclosed `<head>` tags and improperly placed `<body>` tags in `index.html`.
   - Removed stray syntax glitches like `<width: 200px;>` in `index.html`.
   - Fixed duplicate closing tags (`</body></html>` placed multiple times) in `academics.html` and `admission.html`.
4. **CSS Layout Collapse:**
   - Added missing layout utilities (`.container`, `.width-100`, `.width-33`, `.width-40`, `.width-60`, `.margin-top-50`) to prevent column stacking and float collapse.
   - Fixed CSS syntax error: corrected `font-family 'Roboto', sans-serif!important;` (missing colon) in `styles.css`.
5. **URL Space Handling:**
   - Web browsers and servers frequently encounter encoding issues with filenames containing spaces (`contact us.html`). Created a standard `contact.html` while preserving `contact us.html` to guarantee zero broken links.
6. **Unified Styling & Master CSS:**
   - Consolidated scattered stylesheets (`style.css`, `style 2.css`, `style1.css`) into a unified `styles.css` using modern design tokens, cohesive Google Fonts (`Outfit` & `Inter`), and responsive media queries.
7. **Interactive Form Validation:**
   - Added `script.js` with client-side form validation and accessible inline feedback banners so inquiries don't just reload the page.

---

## 🚀 Getting Started (Local Setup)

To run this project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/bhagyashree213/college-website.git
cd college-website
```

### 2. Open Directly in Browser
Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### 3. (Recommended) Run with a Local Web Server

**Using Python 3:**
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

**Using VS Code Live Server:**
1. Open the folder in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

**Using Node.js (`npx`):**
```bash
npx serve .
```

---

## 🌐 How to Enable GitHub Pages

You can host this website completely **FREE** on GitHub Pages in 4 simple steps:

1. Go to your repository on GitHub: `https://github.com/bhagyashree213/college-website`.
2. Click on the **Settings** tab (gear icon at the top right).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **"Build and deployment"**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.
5. Wait 30–60 seconds. Refresh the page to see your live URL:
   👉 **`https://bhagyashree213.github.io/college-website/`**

---

## 🧰 Technology Stack

- **Markup:** HTML5 (Semantic Structure, Meta Viewports, Open Graph SEO)
- **Styling:** CSS3 (Flexbox, CSS Grid, Custom Properties / CSS Variables, Micro-animations)
- **Typography:** Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit) & [Inter](https://fonts.google.com/specimen/Inter))
- **Scripting:** Vanilla JavaScript (ES6+ Client Validation & DOM Events)
- **Hosting:** GitHub Pages Compatible

---

## 👩‍💻 Author & Acknowledgments

- **Author:** [Bhagyashree Bhusare](https://github.com/bhagyashree213)
- **Institution:** [Dr. D. Y. Patil School of Science & Technology](https://dypsst.com/), Pune
- **Repository:** [https://github.com/bhagyashree213/college-website](https://github.com/bhagyashree213/college-website)

---

⭐ **If you find this project helpful, please consider giving it a star on GitHub!**
