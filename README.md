# Not a Linker 🔗

**Quick frame and section link copying for Figma with multilingual support**

*Available in 9 languages: English, Русский, Deutsch, Français, Español, Português, 日本語, 한국어, 中文*

> **⚠️ Important**: This plugin uses `enablePrivatePluginApi` for reliable file key access, which means it works only as a local development plugin. It cannot be published to Figma Community due to private API usage.

---

## 🎯 What it does

Not a Linker copies formatted links to your selected frames and sections in both plain text and clickable HTML format. Perfect for:
- **Documentation** - Share specific design references with clickable links
- **Design reviews** - Link directly to components in messaging apps
- **Handoff** - Provide developers with exact frame links
- **Team collaboration** - Quick sharing of design elements in Telegram, Slack, etc.

## ✨ Key Features

- ⚡ **Smart copying** - Select frames → Get formatted links with one click
- 🌍 **9 languages** - Auto-detects your browser language
- 🔗 **Dual format** - Copies both plain text and clickable HTML links
- 📱 **App-ready** - Works great in Telegram, Slack, Notes, and other apps
- 🎨 **Frames & Sections** - Works with both content types
- 🚀 **Lightweight** - No network access, works offline

## 🔧 Installation

Since this plugin uses private APIs, it must be installed locally:

1. **Clone** this repository: `git clone https://github.com/mautre/not-a-linker.git`
2. **Install** dependencies: `npm install`
3. **Build** the plugin: `npm run build`
4. **Import** in Figma: `Plugins → Development → Import plugin from manifest`
5. **Select** the `manifest.json` file from the cloned directory

## 🚀 How to use

1. **Select** one or more frames/sections in Figma
2. **Run** the plugin from menu: `Plugins → Development → Not a Linker`
3. **Click** "Copy and Close" button in the interface
4. **Paste** the formatted links anywhere you need them

## 📋 What gets copied

**Plain text format:**
```
My Frame Name
https://www.figma.com/file/abc123?node-id=123%3A456

Another Frame
https://www.figma.com/file/abc123?node-id=789%3A012
```

**HTML format (for clickable links):**
- Frame names become clickable links
- Perfect for messaging apps like Telegram
- Works in rich text editors and documentation tools

## 🌍 Supported Languages

- 🇺🇸 English (en)
- 🇷🇺 Русский (ru)
- 🇩🇪 Deutsch (de)
- 🇫🇷 Français (fr)
- 🇪🇸 Español (es)
- 🇵🇹 Português (pt)
- 🇯🇵 日本語 (ja)
- 🇰🇷 한국어 (ko)
- 🇨🇳 中文 (zh-cn)

*Language automatically detected from your browser settings*

---

## 📄 License

MIT License - Free for personal and commercial use.

*Made with ❤️ for the Figma Community* 