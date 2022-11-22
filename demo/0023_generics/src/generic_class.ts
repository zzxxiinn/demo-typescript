class TreeNode<T> {
  constructor(public wasSuccessful: boolean, public error: T) {
    this.wasSuccessful = wasSuccessful;
    this.error = error;
  }
  public clone(): TreeNode<T> {
    return new TreeNode(this.wasSuccessful, this.error);
  }
}
let r1 = new TreeNode(false, 'error: 42'); // Compiler infers T to string
let r2 = new TreeNode(false, 42); // Compiler infers T to number
// let r3 = new TreeNode<string>(true, null); // Explicitly set T to string
// let r4 = new TreeNode<string>(true, 4); // Compilation error because 4 is not a string
