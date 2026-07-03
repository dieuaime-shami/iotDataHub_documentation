import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const layoutPath = join(
  root,
  'node_modules/nextra-theme-docs/dist/layout.js'
)

const fixedLayout = `import { jsx, jsxs } from "react/jsx-runtime";
import { ThemeProvider } from "next-themes";
import { SkipNavLink } from "nextra/components";
import { z } from "zod";
import { MobileNav } from "./components/sidebar";
import { LayoutPropsSchema } from "./schemas";
import { ConfigProvider, ThemeConfigProvider } from "./stores";

const Layout = (props) => {
  const { data, error } = LayoutPropsSchema.safeParse(props);
  if (error) {
    throw z.prettifyError(error);
  }
  const { footer, navbar, pageMap, nextThemes, banner, children, ...rest } =
    data;

  return jsx(ThemeConfigProvider, {
    value: rest,
    children: jsxs(ThemeProvider, {
      ...nextThemes,
      children: [
        jsx(SkipNavLink, {}),
        banner,
        jsxs(ConfigProvider, {
          pageMap,
          navbar,
          footer,
          children: [jsx(MobileNav, {}), children],
        }),
      ],
    }),
  });
};

export { Layout };
`

try {
  const current = readFileSync(layoutPath, 'utf8')
  if (current.includes('LayoutPropsSchema.safeParse(props)')) {
    console.log('[patch-nextra] nextra-theme-docs layout already patched')
    process.exit(0)
  }
  writeFileSync(layoutPath, fixedLayout)
  console.log('[patch-nextra] Patched nextra-theme-docs layout for Zod 4 compatibility')
} catch (error) {
  console.warn('[patch-nextra] Skipped:', error.message)
}
