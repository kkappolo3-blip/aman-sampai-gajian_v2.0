import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canon Budget" },
      { name: "description", content: "Canon Budget — Perencana anggaran keluarga premium." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/app.html"
      title="Canon Budget"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
