# Chrome Keyboard Shortcuts Extension

A Chrome extension that allows you to copy the current page's title and URL as rich text using a keyboard shortcut.

## Features

- **Keyboard Shortcut**: Press `Shift+Cmd+L` (Mac) or `Shift+Ctrl+L` (Windows/Linux) to copy the current page as a hyperlink
- **Rich Text Support**: Copies both HTML format (for pasting into rich text editors) and plain text fallback
- **Visual Feedback**: Shows a notification when the link is successfully copied

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension is now installed and ready to use

## Usage

1. Navigate to any webpage
2. Press `Shift+Cmd+L` (Mac) or `Shift+Ctrl+L` (Windows/Linux)
3. The page title and URL will be copied to your clipboard as a hyperlink
4. Paste into any application that supports rich text (like Google Docs, Word, etc.)

## Technical Details

- Uses Chrome Extension Manifest V3
- Implements modern Clipboard API for rich text support
- Includes fallback to plain text if rich text copying fails
- Shows non-intrusive notifications for user feedback

## Files Structure

- `manifest.json` - Extension configuration
- `background.js` - Service worker for handling keyboard commands
- `content.js` - Content script for clipboard operations and notifications

## Development

This extension is built with vanilla JavaScript and follows Chrome Extension Manifest V3 standards.

## License

MIT License
