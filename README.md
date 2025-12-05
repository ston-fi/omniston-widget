<div align="center" style="margin-bottom: 20px">
  <img alt="Ston.fi logo" src="https://static.ston.fi/logo/full-logo.svg" height="69" />
</div>

### Documentation

For complete documentation, including detailed configuration options, API reference, and integration guides, please visit:

**[https://docs.ston.fi/developer-section/widget](https://docs.ston.fi/developer-section/widget)**

### Distribution Model

**This widget code is not distributed as an npm package.** This is an intentional design decision to prevent integrators from installing a fixed version that becomes outdated over time.

**Why?** By serving the widget exclusively via CDN, we ensure that all integrators always receive the latest version with bug fixes, security patches, and new features. Backward compatibility is guaranteed through the version path (`/v0/`, `/v1/`, etc.), so your integration will continue to work while automatically benefiting from updates within the same major version.

---

Load the widget directly via a script tag. The IIFE bundle exposes `OmnistonWidget` as a global variable on `window`.

```html
  <script src="https://swap.ston.fi/widget/v0/index.js"></script>
  <script type="module">
    const widget = new window.OmnistonWidget(/** **/);
```

**OR**

For applications that need programmatic control over when the widget loads, use this loader package with its `load()` function.

```sh
npm i @ston-fi/omniston-widget-loader
```

```js
import omnistonWidgetLoader from "@ston-fi/omniston-widget-loader";

omnistonWidgetLoader.load().then((OmnistonWidget) => {
  const widget = OmnistonWidget(/** **/);
```
