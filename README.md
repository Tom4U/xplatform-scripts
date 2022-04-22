# Cross-platform scripts for Windows and Linux

## Installation
`npm install --save-dev @tom4/xplatform-scripts

---

## Short Description
Run in NPM scripts one command to execute it either on Windows or Linux. If there should be no coresponding script it won't be executed.

---

## Detailed Description
I often get into situations where I needed to execute a shell command, but also stay compatible with either Windows or Linux environment.
Before, I was adding different NPM scripts for each system and developer had to choose what they want to excute.

This package provides a more comfortable solution to that issue.

There are 2 commands available (see below). <br>
* One is for executing a script in a custom path.
* The other uses a tools folder inside your project where you only need to provide the name of the tool (script).

Scripts' name have to end either on `.cmd` or `.sh`. If you further want to run i.e. PowerShell or Bash or whatever language your prefer, you can go from them to further run other commands.<br>
I've decided for those two types, because they are the most basic ones in both systems.

In case you have scripts that only need to run in either of those two systems, you can just omit one of those script and there won't be any try to execute it.

Example: You have a script with special instructions only needed for Windows. Than just put a `.cmd` script into place and omit the `.sh` one.

---

## Technical Instructions
As stated before, there are two functions you can use:
1. execCommand(commandPath)
2. execTool(toolName)

### __execCommand__
Use this function to execute a custom command inside a path outside of the tools folder.<br>
This command can come in handy, if you need to run scripts outside of your repository or if you like to use a different folder structure or such.

#### Parameter `commandPath`
This is the full path to your command excluding the file extensions.

#### Example
Suppose you have the following structure inside your project's root for a command named `my-command`:<br>
```
|-- myscripts
|   |-- my-command.sh
|   |-- my-command.cmd
```
Then you could run: `execCommand('myscripts/my-command')`

### __execTool__
This function follows a pre-defined structure. Therefore a path is not needed.

#### Parameter `toolName`
The name of the tool you want to be executed.

#### Example
Suppose you want to run a tool named `my-tool`. Then you need to have the following folder structure inside the root of your project:
```
|-- tools
|   |-- my-tool
|   |   |-- my-tool.sh
|   |   |-- my-tool.cmd
```
Then you could run `execTool('my-tool')`