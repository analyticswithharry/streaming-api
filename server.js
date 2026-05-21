const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT || 4107);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const lesson = {
  id: "streaming-api",
  title: "Streaming API",
  level: "Then Learn",
  stack: ["SSE", "Kafka Streams", "Redis Streams"],
  useCases: ["Live feeds", "Analytics", "Financial data flows"],
};

app.get("/api/health", (req, res) =>
  res.json({ success: true, lesson: lesson.id }),
);
app.get("/api/lesson", (req, res) => res.json({ success: true, data: lesson }));
app.get("/api/demo", (req, res) => {
  res.json({
    success: true,
    message: "Streaming concepts ready",
    next: "Implement SSE endpoint",
  });
});

app.get("/", (req, res) => {
  res
    .type("html")
    .send(
      `<html><head><title>${lesson.title} Lab</title><style>body{font-family:Manrope,Arial,sans-serif;background:#f5f1ea;padding:24px}main{max-width:900px;margin:auto;background:#fff;padding:20px;border-radius:16px}</style></head><body><main><h1>${lesson.title} Lab</h1><p>Start with SSE, then move to Kafka-style event pipelines.</p><p><a href='/api/lesson'>GET /api/lesson</a></p></main></body></html>`,
    );
});

app.listen(PORT, () =>
  console.log(`${lesson.title} lab running on http://localhost:${PORT}`),
);
