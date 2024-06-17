export class SystemReporter {
  private _memoryUsage: MemoryUsage;
  private _cpuUsage: CpuUsage;

  private startMemory: NodeJS.MemoryUsage;
  private startCpu: NodeJS.CpuUsage;
  private endMemory: NodeJS.MemoryUsage;
  private endCpu: NodeJS.CpuUsage;

  constructor({ startOnCreation = true }: SystemReporterOptions = {}) {
    if (startOnCreation) {
      this.start();
    }
  }

  public start(): SystemReporter {
    this.startMemory = process.memoryUsage();
    this.startCpu = process.cpuUsage();
    return this;
  }

  public end(): SystemReporter {
    this.endMemory = process.memoryUsage();
    this.endCpu = process.cpuUsage();

    this.memoryUsage = this.calculateMemoryUsage();
    this.cpuUsage = this.calculateCpuUsage();

    return this;
  }

  set memoryUsage(runUsage: MemoryUsage) {
    this._memoryUsage = runUsage;
  }

  set cpuUsage(runUsage: CpuUsage) {
    this._cpuUsage = runUsage;
  }

  get memoryUsage(): MemoryUsage {
    return this._memoryUsage;
  }

  get cpuUsage(): CpuUsage {
    return this._cpuUsage;
  }

  calculateMemoryUsage(): MemoryUsage {
    return {
      rss: this.endMemory.rss - this.startMemory.rss,
      heapTotal: this.endMemory.heapTotal - this.startMemory.heapTotal,
      heapUsed: this.endMemory.heapUsed - this.startMemory.heapUsed,
      external: this.endMemory.external - this.startMemory.external,
    };
  }

  calculateCpuUsage(): CpuUsage {
    const user = this.endCpu.user - this.startCpu.user;
    const system = this.endCpu.system - this.startCpu.system;
    return {
      user,
      system,
      cpuTime: (user + system) / 1e6,
    };
  }

  reportMemoryUsage(): void {
    // Convert memory usage to KB when reporting
    console.log('Memory usage (KB):', JSON.stringify({
      rss: this.memoryUsage.rss / 1024,
      heapTotal: this.memoryUsage.heapTotal / 1024,
      heapUsed: this.memoryUsage.heapUsed / 1024,
      external: this.memoryUsage.external / 1024,
    }, null, 2));
  }

  reportCpuUsage(): void {
    console.log('CPU usage:', JSON.stringify(this.cpuUsage, null, 2));
  }

  report(): void {
    if (!this._memoryUsage || !this._cpuUsage) {
      this.end();
    }
    
    this.reportMemoryUsage();
    this.reportCpuUsage();
  }
}

//#region [NodeJS types]
type MemoryUsage = {
  rss: number;
  heapTotal: number;
  heapUsed: number;
  external: number;
};

type CpuUsage = {
  user: number;
  system: number;
  cpuTime: number;
};

type SystemReporterOptions = {
  startOnCreation?: boolean;
};
//#endregion