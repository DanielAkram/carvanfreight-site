export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}