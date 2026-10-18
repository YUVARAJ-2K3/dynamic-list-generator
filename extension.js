const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand('listGenerator.create', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('Open a text editor first.');
      return;
    }

    const value = await vscode.window.showInputBox({
      title: 'Dynamic List Generator',
      prompt: 'How many quoted list elements do you want?',
      placeHolder: 'Example: 5',
      validateInput(input) {
        const n = Number(input);
        return /^\d+$/.test(input) && Number.isSafeInteger(n) && n >= 1 && n <= 1000
          ? null
          : 'Enter a whole number from 1 to 1000.';
      }
    });
    if (value === undefined) return;
    const n = Number(value);
    if (!/^\d+$/.test(value) || !Number.isSafeInteger(n) || n < 1 || n > 1000) return;

    // Use snippet tab stops: ${1}, ${2}, ... ${n}, then $0.
    const entries = Array.from({ length: n }, (_, index) => `"\${${index + 1}}"`);
    const snippet = new vscode.SnippetString(`[${entries.join(', ')}]$0`);
    await editor.insertSnippet(snippet);
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}
module.exports = { activate, deactivate };
