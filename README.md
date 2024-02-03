npx create-next-app@latest -e https://github.com/wkd2314/next-template-app
---
- includes dependencies which create-next-app don't have such as prettier, cva, clsx...
- includes cn function using clsx and twMerge
- includes Icon component that supports dynamic import settings for lucide-react
- has initial settings for prettier and tailwind(prettier for tailwind)

```
"dependencies": {
    "class-variance-authority": "^0.7.0",
    "client-only": "^0.0.1",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.3",
    "lodash": "^4.17.21",
    "lucide-react": "^0.321.0",
    "next": "14.1.0",
    "next-themes": "^0.2.1",
    "react": "^18",
    "react-dom": "^18",
    "server-only": "^0.0.1",
    "swr": "^2.2.4",
    "tailwind-merge": "^2.2.0",
    "zod": "^3.22.4",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@types/lodash": "^4.14.202",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "eslint-config-prettier": "^9.1.0",
    "husky": "^9.0.10",
    "postcss": "^8",
    "prettier": "^3.2.4",
    "prettier-plugin-tailwindcss": "^0.5.11",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
```
