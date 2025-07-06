# Release Notes v1.0.1

## 🔧 Critical Bug Fix

### Fixed Link Generation Issue
- **Problem**: Links were generating with `undefined` file keys, creating invalid URLs like `https://www.figma.com/file/undefined?node-id=...`
- **Solution**: Added `enablePrivatePluginApi: true` to manifest.json for proper file key access
- **Result**: All links now generate correctly with proper file keys

### Technical Improvements
- ✅ Enhanced error handling for edge cases
- ✅ Added console warnings for debugging
- ✅ Improved fallback mechanisms when file key is unavailable

## 📋 Release Summary

**Version**: 1.0.1  
**Type**: Bug Fix  
**Priority**: High (fixes broken core functionality)  
**Compatibility**: All existing features maintained

### What's Fixed
- Link generation now works correctly in all scenarios
- No more `undefined` in generated URLs
- Reliable file key access through private API

### What's New
- Better error reporting and debugging
- Enhanced fallback handling
- Improved reliability

---

## 🚀 For Figma Community

### Release Description (English)
**Bug Fix: Link Generation**

Fixed a critical issue where frame links were generating with undefined file keys. All links now generate correctly with proper file keys. This update ensures the plugin works reliably in all scenarios.

**What's Fixed:**
- ✅ Link generation now works correctly
- ✅ No more undefined file keys in URLs
- ✅ Enhanced error handling

### Release Description (Русский)
**Исправление: Генерация ссылок**

Исправлена критическая ошибка, при которой ссылки на фреймы генерировались с неопределенными ключами файлов. Теперь все ссылки генерируются корректно с правильными ключами файлов. Это обновление обеспечивает надежную работу плагина во всех сценариях.

**Что исправлено:**
- ✅ Генерация ссылок теперь работает корректно
- ✅ Больше нет неопределенных ключей файлов в URL
- ✅ Улучшенная обработка ошибок

---

## 🔄 Upgrade Instructions

1. **Automatic**: Plugin will update automatically in Figma
2. **Manual**: Reinstall from Figma Community if needed
3. **No data loss**: All settings and functionality preserved

## 📞 Support

If you encounter any issues:
- Check that you're using the latest version (1.0.1)
- Restart Figma if links still don't work
- Report issues in Figma Community comments 