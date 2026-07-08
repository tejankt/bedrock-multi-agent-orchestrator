# AWS Bedrock Multi-Agent Orchestrator

A lightweight, enterprise-grade prototype demonstrating a **Supervisor-Worker multi-agent orchestration pattern** using TypeScript, AWS Bedrock (Claude 3.5 Sonnet), and isolated state machine concepts.

## 🚀 Architectural Overview

This project implements a structural decoupling pattern for complex LLM tasks. Instead of overloading a single agent or system prompt—which scales poorly and leads to significant model hallucination—this pipeline utilizes a centralized orchestrator:

1. **Supervisor Agent**: Leverages Claude 3.5 Sonnet to parse an incoming unstructured enterprise request and determine structural next steps, dynamically routing execution to dedicated worker sub-agents.
2. **Worker Agents**: Highly specialized, tightly scoped, and context-isolated prompt loops (e.g., Data Extraction and Automated Reconciliation).
3. **State Management**: Built on a centralized state pattern mirroring AWS Lambda executions, preserving operational state asynchronously across distinct model inferences.

```text
                  [ User Request ]
                         │
                         ▼
             ┌───────────────────────┐
             │   Supervisor Agent    │ (Claude 3.5 Sonnet)
             └───────────┬───────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
  │ Document    │ │ Data        │ │ Compliance  │
  │ Extraction  │ │ Reconciler  │ │ Auditor     │
  │ Agent       │ │ Agent       │ │ Agent       │
  └─────────────┘ └─────────────┘ └─────────────┘ 

## 📁 Directory Structure
```bash
├── src/
│   ├── types.ts         # Centralized, strongly-typed state definitions
│   ├── prompts.ts       # Separated system prompt constraints & few-shot wrappers
│   ├── lambda.ts        # Orchestration logic & AWS SDK integration layer
│   └── index.ts         # Local simulator / entry point
├── package.json
└── tsconfig.json