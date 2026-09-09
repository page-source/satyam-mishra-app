import { Instrument_Serif, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Grain from '../components/Grain';
import ScrollProgress from '../components/ScrollProgress';
import Nav from '../components/Nav';
import { profile } from '../lib/content';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const description =
  'Engineering manager with 12 years in frontend and 3 years leading teams. I work on consumer facing AI features across web and mobile at Newfold Digital.';

export const metadata = {
  metadataBase: new URL('https://satyam-mishra.vercel.app'),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description,
    url: '/',
    siteName: profile.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

// One tag, no media query, so the toggle can keep it in step with the page.
export const viewport = {
  themeColor: '#f3ead8',
};

// set the theme before first paint so it doesn't flash the wrong one.
// warm unless a choice was saved earlier.
const themeInit = `
(function(){
  var themes = ['warm','light','dark'];
  var theme = 'warm';
  try {
    var stored = localStorage.getItem('theme');
    if (themes.indexOf(stored) > -1) theme = stored;
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {/* motion ssrs opacity:0, so without js the page comes up blank */}
        <noscript>
          <style>{`
            [data-reveal],
            [style*="opacity:0"],
            [style*="opacity: 0"] {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body>
        <ScrollProgress />
        <Nav />
        <main id="top">{children}</main>
        <Grain />
      </body>
    </html>
  );
}
