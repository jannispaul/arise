# Minimal Webflow Developement Starter

Uses [vite](https://vitejs.dev/) to run dev server and to minify output.

## Setup

- Clone
- Rename
- Open: `code .`
- `pnpm install`
- `git init`
- Push

## Usage

### Run locally

`pnpm run dev`: http://localhost:5173`

Local dev script can be added in Weblfow:

```
<script src="http://localhost:5173/script.js"></script>
```

Or in Chrome browser console:

```
var ele = document.createElement("script");
var scriptPath = "http://localhost:5173/script.js" //verify the script path
ele.setAttribute("src",scriptPath);
document.head.appendChild(ele)

```

### Minify and copy to webflow

`pnpm run build`

### Purge CDN cache

[https://www.jsdelivr.com/tools/purge]

Enter the url: `https://cdn.jsdelivr.net/gh/jannispaul/arise@latest/dist/assets/index.js`
