# Hooks for Alpine.js

This package contains a variety of hooks for [Alpine.js](https://alpinejs.dev/) that can be used to improve the developer experience of common front-end development tasks.

## Installation

You can install this package via npm:

```sh
npm install @ryangjchandler/alpine-hooks
```

You can then register all of the available hooks as an Alpine plugin.

```js
import Alpine from 'alpinejs';
import Hooks from '@ryangjchandler/alpine-hooks';

Alpine.plugin(Hooks);
Alpine.start();
```

Or if you only need particular hooks, you can import and register them separately.

```js
import Alpine from 'alpinejs';
import { useHover, useWindowSize } from '@ryangjchandler/alpine-hooks';

Alpine.plugin(useHover);
Alpine.plugin(useWindowSize);
Alpine.start();
```

## Usage

The table below lists all of the available hooks.

| Hook               | Description                                                                                                    | Example                                |
|--------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------|
| `$useHover`        | Reacts to a mouse hovering over a specific element.                                                            | [View](/examples/useHover.html)        |
| `$useFocus`        | Reacts to a specific element being focused and blurred.                                                        | [View](/examples/useFocus.html)        |
| `$useHash`         | Update and react to changes to `window.location.hash`.                                                         | [View](/examples/useHash.html)         |
| `$useWindowSize`   | Read and react to changes in the window / viewport size.                                                       | [View](/examples/useWindowSize.html)   |
| `$useIntersecting` | Reacts to intersection of a target element with an ancestor element or with the top-level document's viewport. | [View](/examples/useIntersecting.html) |

### `$useHover`

This hook can be used to react to the cursor hovering over a specific element.

```html
<div x-data="{ hovering: $useHover($refs.target) }">
    <div id="target" x-ref="target"></div>
</div>
```

When the `#target` element is being hovered over, `hovering` will be `true`. Otherwise it will default to `false.`

### `$useFocus`

This hook can be used to react to focus changes on an element.

```html
<div x-data="{ focused: $useFocus($refs.target) }">
    <input x-ref="target" />
</div>
```

When the `input` element is focused, the property will be `true`. When the `blur` event is fired (unfocusing), it will be `false`.

### `$useHash`

This hook allows you to modify `window.location.hash` and react to external changes too.

```html
<div x-data="{ tab: $useHash('#one') }">
    <button x-on:click="tab = '#two'">Two</button>

    <!-- More buttons go here... -->

    <div x-show="tab === '#two'">
        <!-- ... -->
    </div>
</div>
```

Changing the value of the `tab` property updates the hash in the URL and is reactive. The `tab` property will also read the hash when the component is initialised, defaulting to the value passed in to the hook.

### `$useWindowSize`

This hook lets returns the `width` and `height` of the viewport and reacts to changes.

```html
<div x-data="{ size: $useWindowSize() }">
    <p x-show="size.width < 720">
        Your screen is very narrow.
    </p>
</div>
```

### `$useIntersecting`

This hook can be used to react to intersection of a target element with an ancestor element or with the top-level document's viewport.

```html
<div x-data="{ intersecting: $useIntersecting($refs.target) }">
    <div id="target" x-ref="target"></div>
</div>
```

The hook also supports passing an object to configure it, below are the supported options:

- `initial` - Specify the initial state of the observer. Defaults to `false`.
- `target` - The element that is being observed.
- `root` - The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
- `rootMargin` - Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
- `threshold` - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array `[0, 0.25, 0.5, 0.75, 1]`. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run).

```html
<div x-data="{ intersecting: $useIntersecting({ target: $refs.target, rootMargin: '50px', threshold: 0.5 }) }">
    <div id="target" x-ref="target"></div>
</div>
```
