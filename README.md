tcghelper
=================

A CLI for Analyzing and Managing TCG Player inventory


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tcghelper.svg)](https://npmjs.org/package/tcghelper)
[![Downloads/week](https://img.shields.io/npm/dw/tcghelper.svg)](https://npmjs.org/package/tcghelper)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tcghelper
$ tcghelper COMMAND
running command...
$ tcghelper (--version)
tcghelper/0.0.0 linux-x64 node-v18.20.4
$ tcghelper --help [COMMAND]
USAGE
  $ tcghelper COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tcghelper hello PERSON`](#tcghelper-hello-person)
* [`tcghelper hello world`](#tcghelper-hello-world)
* [`tcghelper help [COMMAND]`](#tcghelper-help-command)
* [`tcghelper plugins`](#tcghelper-plugins)
* [`tcghelper plugins add PLUGIN`](#tcghelper-plugins-add-plugin)
* [`tcghelper plugins:inspect PLUGIN...`](#tcghelper-pluginsinspect-plugin)
* [`tcghelper plugins install PLUGIN`](#tcghelper-plugins-install-plugin)
* [`tcghelper plugins link PATH`](#tcghelper-plugins-link-path)
* [`tcghelper plugins remove [PLUGIN]`](#tcghelper-plugins-remove-plugin)
* [`tcghelper plugins reset`](#tcghelper-plugins-reset)
* [`tcghelper plugins uninstall [PLUGIN]`](#tcghelper-plugins-uninstall-plugin)
* [`tcghelper plugins unlink [PLUGIN]`](#tcghelper-plugins-unlink-plugin)
* [`tcghelper plugins update`](#tcghelper-plugins-update)

## `tcghelper hello PERSON`

Say hello

```
USAGE
  $ tcghelper hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ tcghelper hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/dev/tcghelper/blob/v0.0.0/src/commands/hello/index.ts)_

## `tcghelper hello world`

Say hello world

```
USAGE
  $ tcghelper hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ tcghelper hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/dev/tcghelper/blob/v0.0.0/src/commands/hello/world.ts)_

## `tcghelper help [COMMAND]`

Display help for tcghelper.

```
USAGE
  $ tcghelper help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tcghelper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.13/src/commands/help.ts)_

## `tcghelper plugins`

List installed plugins.

```
USAGE
  $ tcghelper plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tcghelper plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.10/src/commands/plugins/index.ts)_

## `tcghelper plugins add PLUGIN`

Installs a plugin into tcghelper.

```
USAGE
  $ tcghelper plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into tcghelper.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TCGHELPER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TCGHELPER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ tcghelper plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ tcghelper plugins add myplugin

  Install a plugin from a github url.

    $ tcghelper plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ tcghelper plugins add someuser/someplugin
```

## `tcghelper plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tcghelper plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tcghelper plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.10/src/commands/plugins/inspect.ts)_

## `tcghelper plugins install PLUGIN`

Installs a plugin into tcghelper.

```
USAGE
  $ tcghelper plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into tcghelper.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TCGHELPER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TCGHELPER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ tcghelper plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ tcghelper plugins install myplugin

  Install a plugin from a github url.

    $ tcghelper plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ tcghelper plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.10/src/commands/plugins/install.ts)_

## `tcghelper plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ tcghelper plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ tcghelper plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.10/src/commands/plugins/link.ts)_

## `tcghelper plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ tcghelper plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tcghelper plugins unlink
  $ tcghelper plugins remove

EXAMPLES
  $ tcghelper plugins remove myplugin
```

## `tcghelper plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ tcghelper plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.10/src/commands/plugins/reset.ts)_

## `tcghelper plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ tcghelper plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tcghelper plugins unlink
  $ tcghelper plugins remove

EXAMPLES
  $ tcghelper plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.10/src/commands/plugins/uninstall.ts)_

## `tcghelper plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ tcghelper plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tcghelper plugins unlink
  $ tcghelper plugins remove

EXAMPLES
  $ tcghelper plugins unlink myplugin
```

## `tcghelper plugins update`

Update installed plugins.

```
USAGE
  $ tcghelper plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->
