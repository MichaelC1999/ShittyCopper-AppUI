import { Providers } from "./providers";

export const metadata = {
  title: "OR - Onchain Reputation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
