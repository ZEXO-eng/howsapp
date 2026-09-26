# HowsApp Website

Static website prepared for Google OAuth branding.

Files:
- index.html — homepage
- privacy.html — privacy policy
- terms.html — terms of service
- assets/style.css — HowsApp glass UI styles
- assets/site.js — language switch + site configuration
- assets/howsapp-logo.png — brand logo

## Before publishing

Open `assets/site.js` and replace:

```js
domain: "https://YOUR-DOMAIN.com",
supportEmail: "YOUR_EMAIL@gmail.com"
```

with your real verified domain and your support/contact email.

## Google OAuth fields after deployment

If your domain is `https://howsapp.example`:

- Application home page:
  https://howsapp.example/

- Application privacy policy link:
  https://howsapp.example/privacy.html

- Application terms of service link:
  https://howsapp.example/terms.html

- Authorized domain:
  howsapp.example

For Google production/verification, use a domain you own and verify it in Google Search Console.
Do not use fake URLs.

## Local preview

You can double-click `index.html`, or from this folder run:

python -m http.server 8080

Then open:
http://localhost:8080
