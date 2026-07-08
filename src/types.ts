 export interface AgentState {
  sessionId: string;
  originalRequest: string;
  currentStep: 'SUPERVISOR' | 'EXTRACTION' | 'RECONCILIATION' | 'COMPLETE';
  extractedData?: string;
  reconciliationReport?: string;
  errors: string[];
}

export interface AgentResponse {
  nextStep: 'EXTRACTION' | 'RECONCILIATION' | 'COMPLETE';
  messageForNextAgent: string;
}
