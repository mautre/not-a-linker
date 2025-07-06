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

### ✨ Key Features

- ⚡ **Smart copying** - Select frames → Get formatted links with one click
- 🌍 **9 languages** - Auto-detects your browser language
- 🔗 **Dual format** - Copies both plain text and clickable HTML links
- 📱 **App-ready** - Works great in Telegram, Slack, Notes, and other apps
- 🎨 **Frames & Sections** - Works with both content types
- 🚀 **Lightweight** - No network access, works offline

---

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

### 📋 What gets copied

The plugin copies **two formats simultaneously**:

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

### 🎯 Interface

- **Minimal UI** - 300×200px window for quick interaction
- **Preview area** - See exactly what will be copied
- **One-click operation** - Copy and close with single button
- **Error handling** - Fallback options if copying fails

---

## 🌍 Supported Languages

| Language | Code | Status |
|----------|------|--------|
| 🇺🇸 English | `en` | ✅ |
| 🇷🇺 Русский | `ru` | ✅ |
| 🇩🇪 Deutsch | `de` | ✅ |
| 🇫🇷 Français | `fr` | ✅ |
| 🇪🇸 Español | `es` | ✅ |
| 🇵🇹 Português | `pt` | ✅ |
| 🇯🇵 日本語 | `ja` | ✅ |
| 🇰🇷 한국어 | `ko` | ✅ |
| 🇨🇳 中文 | `zh-cn` | ✅ |

*Language automatically detected from your browser settings*

---

## ⚡ Pro Tips

- **Hotkey setup**: Assign keyboard shortcuts in `Figma → Preferences → Hotkeys`
- **Bulk operations**: Select multiple frames for batch link generation
- **Rich text**: Links paste as clickable in most modern apps
- **Clean URLs**: Links work for both published and private files
- **Cross-platform**: Works on Mac, Windows, and browser versions

---

## 🛠️ For Developers

```bash
# Clone and setup
git clone https://github.com/mautre/not-a-linker.git
cd not-a-linker
npm install

# Development
npm run dev        # Watch mode
npm run build      # Production build
npm run type-check # TypeScript validation
```

### 📁 Project Structure

```
not-a-linker/
├── code.ts          # Main plugin logic (TypeScript)
├── code.js          # Compiled JavaScript
├── ui.html          # Plugin interface with embedded styles
├── manifest.json    # Plugin manifest
├── package.json     # Dependencies and metadata
├── tsconfig.json    # TypeScript configuration
└── README.md        # This documentation
```

### 🎨 Code Architecture

- **DRY Principles**: No code duplication, consolidated translations
- **Modular Design**: Separated concerns (UI, logic, translations)
- **Type Safety**: Full TypeScript coverage with interfaces
- **Embedded Styles**: CSS integrated in HTML for Figma compatibility
- **Dual Clipboard**: HTML + plain text formats for maximum compatibility
- **Performance**: Minimal bundle size (~8KB)

### 🔧 Technical Details

- **HTML Format**: Full HTML with meta charset for better app compatibility
- **Plain Text Fallback**: Always provides readable text version
- **Error Handling**: Graceful fallbacks if clipboard operations fail
- **Memory Efficient**: Cleans up event listeners and resources

---

## 📝 Changelog

### v1.0.1 (Latest)
- 🔧 **Fixed link generation bug** - Links now generate correctly with proper file keys
- ✅ Added `enablePrivatePluginApi` to manifest for reliable file key access
- ✅ Improved error handling for edge cases
- ✅ Enhanced debugging with console warnings

### v1.0.0
- ✅ Initial release with multilingual support
- ✅ 9 languages with auto-detection
- ✅ Dual format copying (HTML + plain text)
- ✅ Frame and section support
- ✅ Clean, responsive UI with embedded styles
- ✅ Optimized for messaging apps compatibility
- ✅ Error handling and fallback mechanisms

---

## 🤝 Contributing

Found a bug or want to add a language? 

1. **Issues**: Report bugs or suggest features
2. **Pull Requests**: Contribute translations or improvements
3. **Feedback**: Rate and review in Figma Community

---

## 📄 License

MIT License - Free for personal and commercial use.

---

*Made with ❤️ for the Figma Community* 