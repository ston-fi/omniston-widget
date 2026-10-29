# Changelog

## 29-10-2026

### Changed

- Updated monorepo tooling.
- Made minor changes to the examples.

### @ston-fi/omniston-widget@0.3.4

#### Changed

- Upgraded `solid-js` from `1.9.10` to `1.9.17`.
- Upgraded `@ston-fi/omniston-sdk` from `0.8.9` to `0.8.12`.
- Aligned the widget build target and JavaScript syntax with ES2022.

## 26-01-2026

### @ston-fi/omniston-widget-loader@0.2.0

#### Changed

- Changed the widget CDN URL from `https://swap.ston.fi/widget/v0/index.js` to `https://widget.ston.fi/v0/index.js`.
- Updated the bundled widget TypeScript declarations.
- Updated the documentation and examples to use the new CDN URL and loader version.

## 04-12-2025

### @ston-fi/omniston-widget-loader@0.1.2

#### Added

- Initial release of the widget loader with an asynchronous `load()` method and `loaded` and `widget` getters.
- Widget loading from `https://swap.ston.fi/widget/v0/index.js`.
- Bundled TypeScript declarations for the widget and its configuration.
