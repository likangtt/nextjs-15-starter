import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextforge.dev";

export const SOURCE_CODE_URL = "https://github.com/weijunext/nextjs-15-starter";
export const PRO_VERSION = "https://nexty.dev";

const TWITTER_URL = 'https://x.com/weijunext'
const BSKY_URL = 'https://bsky.app/profile/judewei.bsky.social'
const EMAIL_URL = 'mailto:weijunext@gmail.com'
const GITHUB_URL = 'https://github.com/weijunext'

export const siteConfig: SiteConfig = {
  name: "Next GAMES",
  tagLine: 'Discover fun and interesting games',
  description:
    "We specialize in selecting high-quality HTML5 games to bring you a lightweight gaming experience that is installation-free and cross-platform. Whether it's a casual puzzle, action adventure, or a magical addictive game, you can play it anytime by opening your browser!",
  url: BASE_URL,
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: '@weijunext',
  socialLinks: {
    bluesky: BSKY_URL,
    twitter: TWITTER_URL,
    email: EMAIL_URL,
    github: GITHUB_URL,
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
