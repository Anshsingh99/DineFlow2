# Git Repository Setup Instructions for Aunty's Kitchen

Since this is a Replit environment with Git restrictions, here's how to set up your own Git repository with this code:

## Method 1: Create New Repository on GitHub

### Step 1: Download the Project
1. In your Replit workspace, click the three dots (⋯) in the file explorer
2. Select "Download as zip"
3. Extract the zip file on your local machine

### Step 2: Create GitHub Repository
1. Go to GitHub.com and create a new repository named "aunty-kitchen"
2. Don't initialize with README (we already have one)
3. Copy the repository URL

### Step 3: Initialize Git Locally
```bash
cd aunty-kitchen  # Navigate to your extracted folder
git init
git add .
git commit -m "Initial commit: Aunty's Kitchen - Complete Indian restaurant website

Features:
- Authentic Indian theme with Hindi text
- Custom animated loader with rotating plate
- Rupee pricing throughout
- Custom cursors (namaste hands, chili pepper)
- Smooth animations and transitions
- Fully responsive mobile-first design
- Reservation system with contact form
- Spice-inspired color palette and gradients
- Bilingual content (Hindi/English)
- Complete restaurant sections (hero, menu, about, gallery, contact)"

git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Method 2: Fork from Template (Recommended)

### If you want to use this as a template:
1. Create a new repository on GitHub
2. Upload the project files
3. Use as a template for future projects

## Project Files Included:
✅ Complete source code (all React components)
✅ Styling and animations (index.css)
✅ Package.json with all dependencies
✅ README.md with full documentation
✅ .gitignore file
✅ Project structure and configuration

## To run locally after cloning:
```bash
npm install
npm run dev
```

The project will start on http://localhost:5000

## Repository Features:
- Complete documentation in README.md
- Proper .gitignore for Node.js projects
- All source code organized and commented
- Ready for deployment on any platform
- Mobile-responsive design
- Production-ready code

Your Aunty's Kitchen website is now ready to be version controlled with Git!