export class Project {
  constructor(
    public name: string,
    public description: string,
    public technologiesUsed: string,
    public note: string,
    public imageUrl: string,
    public githubRepositoryUrl: string,
    public liveDemoUrl: string
  ) {}
}
