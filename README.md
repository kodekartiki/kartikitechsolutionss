# KartikiTechSolutions Website

A responsive, modern business website for **KartikiTechSolutions**, built with HTML, CSS and vanilla JavaScript.

## Included sections
- Responsive navigation with Services dropdown
- Hero section and company introduction
- Website, application, software development, QA testing and AI service cards
- Four-step project process
- Project application form with dropdown selections
- WhatsApp enquiry hand-off and email contact links
- Mobile responsive layout

## Contact details configured
- WhatsApp: +91 73850 26705
- Email currently set to: `kartikitechsolutions@gmail.com`

> **Please verify the email spelling before publishing.** Your message said `kartikitechsolutions@gmsil.com`, which looks like a typo for `gmail.com`. The website currently uses the likely intended Gmail address. If `gmsil.com` is genuinely your domain, replace the address in `index.html` with that exact address.

## Run locally
1. Download and extract the project ZIP.
2. Open the `kartikitechsolutions-website` folder in VS Code.
3. Open `index.html` in a browser, or install the **Live Server** extension in VS Code.
4. Right-click `index.html` and choose **Open with Live Server**.

No Node.js, database or build command is required for this static version.

## Application form behaviour
The form validates required fields in the browser. On submission, it formats the enquiry and opens WhatsApp chat with **+91 73850 26705**. The visitor must press **Send** in WhatsApp to deliver the message.

This starter version does not store applications in a database or email them automatically. To collect enquiries centrally, connect a backend/API or a form service before production use.

## Customize
- Change text and sections in `index.html`.
- Change colours, spacing and responsive styles in `styles.css`.
- Change WhatsApp number and form behaviour in `script.js`.
- Update the email in the mailto links in `index.html`.

## Publish
You can publish this static site using GitHub Pages, Netlify or Vercel. For a custom `.com` domain, purchase the domain and connect its DNS records to your hosting provider.
