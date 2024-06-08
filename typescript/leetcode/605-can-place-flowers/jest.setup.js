beforeAll(() => {
  global.__START_MEMORY__ = process.memoryUsage();
  global.__START_CPU__ = process.cpuUsage();
});

afterAll(() => {
  const endMemory = process.memoryUsage();
  const endCpu = process.cpuUsage();

  const cpuUsage = {
    user: endCpu.user - global.__START_CPU__.user,
    system: endCpu.system - global.__START_CPU__.system,
  };

  const memoryUsage = {
    rss: endMemory.rss - global.__START_MEMORY__.rss,
    heapTotal: endMemory.heapTotal - global.__START_MEMORY__.heapTotal,
    heapUsed: endMemory.heapUsed - global.__START_MEMORY__.heapUsed,
    external: endMemory.external - global.__START_MEMORY__.external,
  };

  // Convert CPU usage to seconds
  const cpuTime = (cpuUsage.user + cpuUsage.system) / 1e6;

  console.log(
    `\nMemory Usage:\n`
    +`RSS:\t${(memoryUsage.rss / 1024).toFixed(2)} KB\n`
    + `Heap Total:\t${(memoryUsage.heapTotal / 1024).toFixed(2)} KB\n`
    + `Heap Used:\t${(memoryUsage.heapUsed / 1024).toFixed(2)} KB\n`
    + `External:\t${(memoryUsage.external / 1024).toFixed(2)} KB\n`
    + `\nCPU Time:\t${cpuTime.toFixed(5)} s\n`
  );
});