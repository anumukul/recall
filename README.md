<!-- ABOUT THE PROJECT -->

## Overview

This project aims to enhance cognitive function in individuals with Alzheimer's by using custom Twitter posts as memory prompts. It leverages a curated content feed to pin memories and serves as a gentle reminder of past events.

## Features

- **Curated Content Feed**: Custom Twitter posts to serve memory prompts, helping to jog memories and maintain cognitive engagement.
- **Effortless Image and Avatar Storage**: Utilizes Cloudinary for seamless image and avatar management, simplifying data handling.
- **Personalized Control**: Users can customize the frequency of memory prompts to ensure optimal engagement and avoid overwhelm.
- **Website Preview**: An integrated feature allowing users to preview how their custom posts will appear in their Twitter feed, ensuring a satisfying user experience.

### Built With

- [Next.js](https://nextjs.org/?ref=cal.com)
- [React.js](https://reactjs.org/?ref=cal.com)
- [Tailwind CSS](https://tailwindcss.com/?ref=cal.com)
- [Prisma.io](https://prisma.io/?ref=cal.com)
- [Shadcn](https://ui.shadcn.com)
- [Supabase](https://supabase.com/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/anumukul/recall`
2. Install dependencies: `npm install`
3. Set up pgAdmin or supabase database on your need
4. Create a `.env` file like `.env.example`
5. Add database, URL and secret keys as in .env.example
6. Migrate prisma model to database: `npx prisma migrate`
7. Start the development server: `npm run dev`

# Integrate Chrome Extension

## Step 1: Open Chrome Extensions Page

First, open your Chrome browser and go to the extensions page by navigating to `chrome://extensions`.

## Step 2: Enable Developer Mode

In the top right corner of the extensions page, toggle the switch to enable **Developer mode**.

## Step 3: Click "Load Unpacked"

Once Developer mode is enabled, you will see additional buttons. Click on the **Load unpacked** button.

## Step 4: Select the Extension Folder

A file dialog will appear. Navigate to the directory where your unpacked extension files are located and select the folder. Make sure the folder contains the `manifest.json` file.

## Step 5: Verify Installation

After selecting the folder, the extension will be loaded and should appear in your list of extensions. You can enable or disable it from the extensions page.

## Usage

1. After setting up the project locally, access the application at `localhost:3000`.
2. Create an account or log in using github account.
3. Create posts to be shown in twitter(now X) feed.

---
