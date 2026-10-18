# Dynamic List Generator for VS Code

Generate a quoted list containing **N elements** and jump between values using **Tab**. Works in any VS Code text editor, including Terraform, Python and JavaScript (the inserted syntax is always JSON/Python/HCL-style `[...]`).

## Demo

1. Open a file and place your cursor where the list should go.
2. Press **Ctrl+Alt+Shift+L** (macOS: **Cmd+Option+Shift+L**), or run **Generate List with N Elements** from the Command Palette.
3. Enter `3` and press Enter.
4. The extension inserts `["", "", ""]`. Type your first value, then use **Tab** to move between values; the last Tab exits the list.

Example output:

```hcl
availability_zones = ["ap-south-1a", "ap-south-1b", "ap-south-1c"]
```

## Install for everyday use (no coding required)

1. Open this repository's **Releases** page.
2. Download the `.vsix` file attached to a release (if a release has been published).
3. In VS Code open **Extensions** (`Ctrl+Shift+X`) → `...` → **Install from VSIX...** and choose the file.
4. Reload VS Code if prompted. The command appears in the Command Palette.

Or from a terminal:

```powershell
code --install-extension .\dynamic-list-generator-1.0.0.vsix
```

> If no release has been published yet, build the VSIX using the steps below. The `local` publisher ID is for local/sideloaded builds; publishing to the VS Code Marketplace requires your own publisher account and an updated `publisher` field.

## Build from source

Prerequisites: [VS Code](https://code.visualstudio.com/), Node.js and npm.

```bash
git clone https://github.com/YUVARAJ-2K3/dynamic-list-generator.git
cd dynamic-list-generator
npm install
npm run check
npm run package
```

Install the newly created `dynamic-list-generator-1.0.0.vsix` via **Install from VSIX**. The generated VSIX is ignored by git.

## Customize shortcut

In VS Code, open **Preferences: Open Keyboard Shortcuts** and search for `Generate List with N Elements`. Click the pencil icon and choose a shortcut that doesn't conflict with other commands. Default: `Ctrl+Alt+Shift+L` (Windows/Linux).

## Features and limits

- Prompts for 1–1000 list elements.
- Inserts double-quoted empty strings separated by commas.
- Uses native VS Code snippet placeholders for **Tab** navigation.
- Replaces a text selection, or inserts at the current cursor.
- Works without AWS credentials, Terraform, or network access.
- Does not auto-detect target-language formatting; for example, Java arrays and some languages require different syntax.

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE).
