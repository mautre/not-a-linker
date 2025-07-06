# Not a Linker 🔗

**Quick frame and section link copying for Figma with multilingual support**

*Available in 9 languages: English, Русский, Deutsch, Français, Español, Português, 日本語, 한국어, 中文*

> **⚠️ Important**: This plugin uses `enablePrivatePluginApi` for reliable file key access, which means it works only as a local development plugin. It cannot be published to Figma Community due to private API usage.

---

## 🇷🇺 Описание на русском

**Быстрое копирование ссылок на фреймы и секции в Figma с поддержкой многих языков**

### 🎯 Что делает плагин

Not a Linker копирует отформатированные ссылки на выбранные фреймы и секции в двух форматах: обычный текст и кликабельные HTML-ссылки. Идеально подходит для:
- **Документации** - Делитесь ссылками на конкретные элементы дизайна
- **Ревью дизайна** - Ссылки напрямую на компоненты в мессенджерах
- **Передачи в разработку** - Предоставляйте разработчикам точные ссылки на фреймы
- **Командной работы** - Быстрый обмен элементами дизайна в Telegram, Slack и т.д.

### ✨ Основные возможности

- ⚡ **Умное копирование** - Выберите фреймы → Получите отформатированные ссылки одним кликом
- 🌍 **9 языков** - Автоматически определяет язык браузера
- 🔗 **Двойной формат** - Копирует и обычный текст, и кликабельные HTML-ссылки
- 📱 **Готов для приложений** - Отлично работает в Telegram, Slack, Notes и других приложениях
- 🎨 **Фреймы и секции** - Работает с обоими типами контента
- 🚀 **Легковесный** - Не требует интернета, работает офлайн

### 🔧 Установка

Поскольку плагин использует приватные API, он должен быть установлен локально:

1. **Клонируйте** репозиторий: `git clone https://github.com/mautre/not-a-linker.git`
2. **Импортируйте** в Figma: `Плагины → Разработка → Импорт плагина из манифеста`
3. **Выберите** файл `manifest.json` из клонированной директории

> **Примечание**: Сборка не требуется - плагин готов к использованию!

### 🚀 Как использовать

1. **Выберите** один или несколько фреймов/секций в Figma
2. **Запустите** плагин из меню: `Плагины → Разработка → Not a Linker`
3. **Нажмите** кнопку "Скопировать и закрыть" в интерфейсе
4. **Вставьте** отформатированные ссылки где угодно

### 📋 Что копируется

**Формат обычного текста:**
```
Название фрейма
https://www.figma.com/file/abc123?node-id=123%3A456

Другой фрейм
https://www.figma.com/file/abc123?node-id=789%3A012
```

**HTML формат (для кликабельных ссылок):**
- Названия фреймов становятся кликабельными ссылками
- Идеально для мессенджеров типа Telegram
- Работает в текстовых редакторах и инструментах документации

---

## 🇺🇸 English Description

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
2. **Import** in Figma: `Plugins → Development → Import plugin from manifest`
3. **Select** the `manifest.json` file from the cloned directory

> **Note**: No build step required - the plugin is ready to use!

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

---

## 🌍 Supported Languages / Поддерживаемые языки

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