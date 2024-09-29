import {Args, Command, Flags} from '@oclif/core'

import { analyzeCurrentPricesBySets } from '../../pricing'

export default class TcghelperSetanalysis extends Command {
  static override args = {
    /* file: Args.string({description: 'file to read'}), */
  }

  static override description = 'gets total inventory value by set ordered from highest to lowest value'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    /* force: Flags.boolean({char: 'f'}), */
    // flag with a value (-n, --name=VALUE)
    /* name: Flags.string({char: 'n', description: 'name to print'}), */
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TcghelperSetanalysis)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /root/dev/tcghelper/src/commands/tcghelper/setanalysis.ts`)
    /* if (args.file && flags.force) { */
    /*   this.log(`you input --force and --file: ${args.file}`) */
    /* } */

    await analyzeCurrentPricesBySets();

  }
}
