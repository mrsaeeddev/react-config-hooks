# react-configurational-hooks

> Deliver experiences best suited to a user&#x27;s OS, device type, browser and other configurational things

[![NPM](https://img.shields.io/npm/v/react-configurational-hooks.svg)](https://www.npmjs.com/package/react-configurational-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-configurational-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'react-configurational-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [dev-saeed](https://github.com/dev-saeed)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
