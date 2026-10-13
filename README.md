# Not a Linker 🔗

**Quick link copying for Figma frames, sections and components — as links, text or Markdown**

*Available in 9 languages: English, Русский, Deutsch, Français, Español, Português, 日本語, 한국어, 中文*

---

## 🇷🇺 Описание на русском

### 🎯 Что делает плагин

Not a Linker копирует ссылки на выбранные элементы в формате, который подходит для места вставки:
- **Ссылки** — названия становятся кликабельными ссылками (Telegram, Заметки, Google Docs)
- **Текст** — название и URL обычным текстом (работает везде)
- **Markdown** — `[Название](url)` для GitHub, Notion, Obsidian

### ✨ Основные возможности

- 🎨 **Фреймы, секции, компоненты, инстансы и группы**
- 👀 **Превью** — видно, что именно скопируется, до копирования
- ⚡ **Быстрые команды** — `⌘/` → Not a Linker → Tab → формат копирует без окна
- 🧠 **Запоминает формат** — последний выбранный формат срабатывает по Enter
- 🌍 **9 языков** — определяется по языку браузера
- 🚀 **Без интернета** — плагин не обращается к сети

### 🔑 Первый запуск в файле

Плагины Figma не знают адрес файла, поэтому при первом запуске плагин попросит ссылку на файл
(`Share → Copy link` или адрес из браузера). Ссылка сохраняется **в самом файле**, так что
вставить её нужно один раз, и она заработает у всей команды.

Если файл продублировали или переименовали, плагин попросит проверить ссылку.
Сменить её вручную: `⌘/` → Not a Linker → Tab → `Change file link…`.

### 🔧 Установка из исходников

1. **Клонируйте** репозиторий: `git clone https://github.com/mautre/not-a-linker.git`
2. **Импортируйте** в Figma: `Плагины → Разработка → Импорт плагина из манифеста`
3. **Выберите** файл `manifest.json` из клонированной директории

> **Примечание**: собранный `code.js` лежит в репозитории, так что сборка не нужна.
> Для разработки: `npm install`, затем `npm run watch`.

### 🚀 Как использовать

1. **Выберите** один или несколько элементов
2. **Запустите** Not a Linker (`⌘/` → Not a Linker → Enter)
3. **Нажмите** нужный формат (наведите курсор, чтобы увидеть превью)
4. **Вставьте** куда угодно

Или сразу без окна: `⌘/` → Not a Linker → Tab → `Links`, `Text` или `Markdown`.

### 📋 Что копируется

**Текст:**
```
Название фрейма
https://www.figma.com/design/abc123/File?node-id=123-456

Другой фрейм
https://www.figma.com/design/abc123/File?node-id=789-12
```

**Markdown:**
```
[Название фрейма](https://www.figma.com/design/abc123/File?node-id=123-456)
[Другой фрейм](https://www.figma.com/design/abc123/File?node-id=789-12)
```

---

## 🇺🇸 English Description

## 🎯 What it does

Not a Linker copies links to the selected layers in the format that fits where you paste:
- **Links** — names become clickable links (Telegram, Notes, Google Docs)
- **Text** — name and URL as plain text (works anywhere)
- **Markdown** — `[Name](url)` for GitHub, Notion, Obsidian

## ✨ Key Features

- 🎨 **Frames, sections, components, instances and groups**
- 👀 **Preview** — see exactly what will be copied
- ⚡ **Quick commands** — `⌘/` → Not a Linker → Tab → format copies without a window
- 🧠 **Remembers your format** — the last one is triggered by Enter
- 🌍 **9 languages** — auto-detected from your browser
- 🚀 **Offline** — no network access

## 🔑 First run in a file

Figma plugins can't read the file's address, so on the first run the plugin asks for a link to the file
(`Share → Copy link` or the browser URL). It's saved **inside the file**, so it's asked once
and then works for the whole team.

If the file is duplicated or renamed, the plugin asks you to check the link.
To change it manually: `⌘/` → Not a Linker → Tab → `Change file link…`.

## 🔧 Install from source

1. **Clone** this repository: `git clone https://github.com/mautre/not-a-linker.git`
2. **Import** in Figma: `Plugins → Development → Import plugin from manifest`
3. **Select** the `manifest.json` file from the cloned directory

> **Note**: the built `code.js` is committed, so no build step is required.
> For development: `npm install`, then `npm run watch`.

## 🚀 How to use

1. **Select** one or more layers
2. **Run** Not a Linker (`⌘/` → Not a Linker → Enter)
3. **Click** a format (hover to preview it)
4. **Paste** anywhere

Or skip the window: `⌘/` → Not a Linker → Tab → `Links`, `Text` or `Markdown`.

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
