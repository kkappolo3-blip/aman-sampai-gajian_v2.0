import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canon Budget" },
      { name: "description", content: "Canon Budget — Perencana anggaran keluarga premium." },
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
