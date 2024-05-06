export default class NoSolutionError extends Error {
  constructor(message: string) {
    super(message);
  }
}
