import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('tcghelper:setanalysis', () => {
  it('runs tcghelper:setanalysis cmd', async () => {
    const {stdout} = await runCommand('tcghelper:setanalysis')
    expect(stdout).to.contain('hello world')
  })

  it('runs tcghelper:setanalysis --name oclif', async () => {
    const {stdout} = await runCommand('tcghelper:setanalysis --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
