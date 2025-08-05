# SendGrid Email Demo

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![SendGrid](https://img.shields.io/badge/SendGrid-API-blue)](https://sendgrid.com/)

A simple Node.js demo showing how to **send transactional emails using the SendGrid API**.  
This example is based on a **real-world use case** from **Global Guide Group (GGG)**:

- Relay form submissions from a Wix Studio website to the correct team member or private guide.
- Avoid exposing written email addresses to web crawlers and spam bots.
- Ensure **professional, authenticated delivery** through your domain.

---

## ✨ Features

- Sends emails using **SendGrid API v3**
- Keeps **recipient emails private** (via relay system)
- Uses `.env` for **secure API key storage**
- Provides **clear inline documentation** for beginners
- Easily adaptable to **Wix Studio** or **Node.js backend** workflows

---

## 📸 Demo

![Console Demo Screenshot](assets/demo-screenshot.png)

*Above: Successful test email sent using `node index.js`.*

Optional: You can add a **diagram** like:

User Form → Backend → SendGrid API → Guide’s Email Inbox
---

## 🚀 Quick Start

### 1. Clone this Repository

```bash
git clone https://github.com/WIALTD/sendgrid-email-demo.git
cd sendgrid-email-demo


---

