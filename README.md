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

| Hook | Description | Example |
| --- | --- | --- |
| `$useHover` | Reacts to a mouse hovering over a specific element. | [View](/examples/useHover.html) |
| `$useFocus` | Reacts to a specific element being focused and blurred. | [View](/examples/useFocus.html) |
| `$useHash` | Update and react to changes to `window.location.hash`. | [View](/examples/useHash.html) |
| `$useWindowSize` | Read and react to changes in the window / viewport size. | [View](/examples/useWindowSize.html) |