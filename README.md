# react-config-hooks

> Deliver experiences best suited to a user&#x27;s OS, device type, browser, and other things

[![NPM](https://img.shields.io/npm/v/react-config-hooks.svg)](https://www.npmjs.com/package/react-config-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a suite of [React Hooks](https://reactjs.org/docs/hooks-overview.html) and utilities for adaptive loading based on a user's:
- Operating System
- Browser
- Configuration

## Objective
Make it easier for developer to target different devices based on their configuration. It can be used to check different settings related to config in order to deliver best experiences to user.  

## Install

```bash
npm install --save react-config-hooks
```

## Usage



### Operating System

```jsx
import { useOS } from 'react-config-hooks'

const [ os,isWin,isMac,isUnix,isLinux,isWinMob,isAndroid,isiOS ] = useOS()
 
```

|  Value   |      Returns        |  Return type |
|----------|:-------------------:|------:|
|    `os`    | Returns the name of OS | String |
| `isWin` | Returns true if OS is Windows and vice versa        |   boolean |
| `isMac` | Returns true if OS is Mac and vice versa       |    boolean |
| `isUnix` | Returns true if OS is Unix and vice versa       |    boolean |
| `isLinux` | Returns true if OS is Linux and vice versa       |    boolean |
| `isWinMob` | Returns true if OS is Windows Mobile and vice versa       |    boolean |
| `isAndroid` | Returns true if OS is Android and vice versa       |    boolean |
| `isiOS` | Returns true if OS is iOS and vice versa       |    boolean |
&nbsp;

___

### Browser

```jsx
import { useBrowser } from 'react-config-hooks'

const [ browser,isChrome,isFirefox,isIE,isEdge,isSafari,isOpera,isYandex ] = useBrowser()
 
```

|  Value   |      Returns        |  Return type |
|----------|:-------------------:|------:|
|    `browser`    | Returns the name of browser | String |
| `isChrome` | Returns true if browser is Chrome and vice versa        |   boolean |
| `isFirefox` | Returns true if browser is Firefox and vice versa       |    boolean |
| `isIE` | Returns true if browser is IE and vice versa       |    boolean |
| `isEdge` | Returns true if browser is Edge and vice versa       |    boolean |
| `isSafari` | Returns true if browser is Safari and vice versa       |    boolean |
| `isOpera` | Returns true if browser is Opera and vice versa       |    boolean |
| `isYandex` | Returns true if browser is Yandex and vice versa       |    boolean |
&nbsp;

___

### Config

```jsx
import { useConfig } from 'react-config-hooks'

const [ deviceConfig,isCookieEnabled ] = useConfig()
 
```

|  Value   |      Returns        |  Return type |
|----------|:-------------------:|------:|
|    `deviceConfig`    | Returns the different properties related to config | object |
| `isCookieEnabled` | Returns true if cookie is enabled and vice versa        |   boolean |

&nbsp;

___


## License

MIT © [dev-saeed](https://github.com/dev-saeed)

