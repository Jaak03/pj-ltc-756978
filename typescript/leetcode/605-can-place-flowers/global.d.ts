export {};

declare global {
  var __START_MEMORY__: NodeJS.MemoryUsage;
  var __START_CPU__: NodeJS.CpuUsage;
  // Add other global variables and their types here if needed
}