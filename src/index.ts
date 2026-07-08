 import { orchestrateMultiAgentPipeline } from "./lambda";
import { AgentState } from "./types";

async function runLocalDemo() {
  // Initialize the state representing an incoming enterprise request
  let applicationState: AgentState = {
    sessionId: "mock-session-12345",
    originalRequest: "Please analyze the attached Q3 financial PDF and find any data variances against our internal budget tracker.",
    currentStep: 'SUPERVISOR',
    errors: []
  };

  console.log("Starting Multi-Agent Orchestrator Demo...");
  console.log("----------------------------------------");
  
  // Run the state machine loop until execution reaches 'COMPLETE'
  while (applicationState.currentStep !== 'COMPLETE') {
    applicationState = await orchestrateMultiAgentPipeline(applicationState);
    console.log("----------------------------------------");
  }

  console.log("\n⚡ --- Final Pipeline Execution State Summary ---");
  console.log(JSON.stringify(applicationState, null, 2));
}

runLocalDemo();
