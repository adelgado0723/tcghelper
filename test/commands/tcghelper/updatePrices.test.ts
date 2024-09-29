import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('tcghelper:updatePrices', () => {
  it('runs tcghelper:updatePrices cmd', async () => {
    const {stdout} = await runCommand('tcghelper:updatePrices')
    expect(stdout).to.contain('hello world')
  })

  it('runs tcghelper:updatePrices --name oclif', async () => {
    const {stdout} = await runCommand('tcghelper:updatePrices --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
