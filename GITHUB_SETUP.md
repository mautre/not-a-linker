# GitHub Setup Instructions

## 🔧 Creating Private Repository

1. **Go to GitHub**: https://github.com/mautre
2. **Click** "New repository" (green button)
3. **Repository name**: `not-a-linker`
4. **Description**: `Multilingual Figma plugin for copying frame/section links with rich text support`
5. **Visibility**: ✅ **Private** (important!)
6. **Initialize**: ❌ Don't add README, .gitignore, or license (we already have them)
7. **Click** "Create repository"

## 📤 Pushing to GitHub

After creating the repository, run these commands:

```bash
cd not-a-linker
git branch -M main
git remote add origin https://github.com/mautre/not-a-linker.git
git push -u origin main
```

## 🔑 Authentication

If you need to authenticate:

### Option 1: Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` permissions
3. Use token as password when prompted

### Option 2: SSH Key
1. Generate SSH key: `ssh-keygen -t ed25519 -C "autrelab@gmail.com"`
2. Add to GitHub: Settings → SSH and GPG keys
3. Use SSH URL: `git@github.com:mautre/not-a-linker.git`

## 📋 Repository Settings

After pushing, configure:

1. **About section**: Add description and topics
2. **Topics**: `figma`, `plugin`, `typescript`, `multilingual`, `private`
3. **Security**: Enable vulnerability alerts
4. **Branches**: Protect main branch if needed

## 🚀 Ready to Use

Once pushed, the repository will be available at:
https://github.com/mautre/not-a-linker

Clone with:
```bash
git clone https://github.com/mautre/not-a-linker.git
``` 