# Streaming API Lab

Build continuous event delivery and consumption patterns for live systems.

## Why this lab matters

Streaming APIs power analytics pipelines, event-driven backends, and near-real-time user experiences. They require different design choices than request-response APIs.

## Core concepts

- Stream producers and consumers
- Event offsets/checkpoints
- Backpressure and flow control
- Delivery guarantees (at-most-once, at-least-once)
- Partitioning and ordering tradeoffs

## Suggested Stack

- Server-Sent Events (SSE) for browser streaming
- Kafka/Redis Streams for backend pipelines

## Practical API plan

- `GET /stream/events` (SSE)
- `POST /stream/publish`
- `GET /stream/consumer-state`
- Starter routes: `GET /api/health`, `GET /api/lesson`, `POST /api/demo`

## Learning Tasks

- Build live SSE endpoint
- Publish structured events
- Add consumer checkpoint tracking
- Simulate failure + recovery behavior
- Measure lag and throughput

## Validation checklist

- [ ] Clients receive ordered events when expected
- [ ] Consumer state survives restart
- [ ] Backpressure behavior is documented
- [ ] Reconnect logic resumes from last checkpoint
