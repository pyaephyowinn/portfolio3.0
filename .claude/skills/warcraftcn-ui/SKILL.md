---
name: warcraftcn-ui
description: Build Warcraft III-themed UIs using the warcraftcn component library (https://warcraftcn.com). Use this skill whenever the user wants to add Warcraft-styled components, mentions warcraftcn, asks for fantasy/gaming UI elements, or wants to build interfaces with a Warcraft III aesthetic. Also trigger when the user mentions installing or using components from warcraftcn.com, or wants dark fantasy styled buttons, cards, inputs, tooltips, or other UI elements inspired by classic RTS games.
---

# WarcraftCN UI Component Library

WarcraftCN is an open-source UI component library that brings classic Warcraft III RTS aesthetics to modern web applications. It's built on top of the shadcn ecosystem, so components are installed via the shadcn CLI and are copy-paste ready.

**Website:** https://www.warcraftcn.com/
**Docs:** https://www.warcraftcn.com/docs
**Components:** https://www.warcraftcn.com/docs/components

## Installation Pattern

Every component is installed individually using the shadcn CLI from the warcraftcn registry:

```bash
pnpm dlx shadcn@latest add https://warcraftcn.com/r/<component>.json
```

Components are installed to `@/components/ui/warcraftcn/` by default.

## Available Components (20+)

| Component | Install Command | Import Path |
|-----------|----------------|-------------|
| Accordion | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/accordion.json` | `@/components/ui/warcraftcn/accordion` |
| Avatar | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/avatar.json` | `@/components/ui/warcraftcn/avatar` |
| Badge | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/badge.json` | `@/components/ui/warcraftcn/badge` |
| Button | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/button.json` | `@/components/ui/warcraftcn/button` |
| Card | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/card.json` | `@/components/ui/warcraftcn/card` |
| Checkbox | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/checkbox.json` | `@/components/ui/warcraftcn/checkbox` |
| Cursor | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/cursor.json` | `@/components/ui/warcraftcn/cursor` |
| Dropdown Menu | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/dropdown-menu.json` | `@/components/ui/warcraftcn/dropdown-menu` |
| Input | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/input.json` | `@/components/ui/warcraftcn/input` |
| Label | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/label.json` | `@/components/ui/warcraftcn/label` |
| Pagination | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/pagination.json` | `@/components/ui/warcraftcn/pagination` |
| Radio Group | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/radio-group.json` | `@/components/ui/warcraftcn/radio-group` |
| Skeleton | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/skeleton.json` | `@/components/ui/warcraftcn/skeleton` |
| Spinner | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/spinner.json` | `@/components/ui/warcraftcn/spinner` |
| Tabs | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/tabs.json` | `@/components/ui/warcraftcn/tabs` |
| Textarea | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/textarea.json` | `@/components/ui/warcraftcn/textarea` |
| Toast | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/toast.json` | `@/components/ui/warcraftcn/toast` |
| Tooltip | `pnpm dlx shadcn@latest add https://warcraftcn.com/r/tooltip.json` | `@/components/ui/warcraftcn/tooltip` |

## Usage Examples

### Button
```jsx
import { Button } from "@/components/ui/warcraftcn/button";

// Standard button
<Button>Click Me</Button>

// Button with frame variant
<Button variant="frame">Framed Button</Button>
```

### Card
```jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/warcraftcn/card";

<Card>
  <CardHeader>
    <CardTitle>Arthas Menethil</CardTitle>
    <CardDescription>Prince of Lordaeron</CardDescription>
  </CardHeader>
  <CardContent>
    <p>The young prince of Lordaeron, and a paladin of the Silver Hand.</p>
  </CardContent>
  <CardFooter>
    <Button>View Profile</Button>
  </CardFooter>
</Card>
```

### Input
```jsx
import { Input } from "@/components/ui/warcraftcn/input";

<Input placeholder="Enter your name..." />
```

## Key Design Notes

- Components use a dark fantasy aesthetic with gothic frames, parchment textures, and faction theming
- Supports light and dark mode with system preference detection
- Built for React/Next.js projects
- Components include hover effects (brightness), active states (scale-95, brightness-75), and fantasy font styling
- The library is fan-made with no official Blizzard affiliation

## Workflow

When the user wants to use warcraftcn components:

1. **Install** the needed components using the shadcn CLI commands above
2. **Import** from the `@/components/ui/warcraftcn/` path
3. **Compose** using the component APIs shown in the examples
4. For component-specific details beyond what's listed here, check the docs at `https://www.warcraftcn.com/docs/components/<component-name>`
