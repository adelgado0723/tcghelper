import * as csvtojson from 'csvtojson'
import * as json2csv from 'json2csv'
import * as fs from 'node:fs'
import * as path from 'node:path'

import {PricingSheetRow} from './types'

export const readPrices = async (): Promise<PricingSheetRow[]> => {
  try {
    const parsedFile: PricingSheetRow[] = await csvtojson().fromFile(path.resolve('.', './prices.csv'))
    return parsedFile
  } catch (error) {
    console.error('Error reading prices.csv:', error)
    return []
  }
}

export const updatePrices = async () => {
  const prices = await readPrices()
  console.log('prices:', prices)
  // for each row, compare the (tcgMarketplacePrice+0.99shipping) to the tcgLowPriceWithShipping
  // sort by the biggest difference
  const sortedByDifference = prices.sort((a, b) => {
    const aPrice = Number.parseFloat(a['TCG Low Price With Shipping'])
    const bPrice = Number.parseFloat(b['TCG Low Price With Shipping'])
    const aMarketPrice = Number.parseFloat(a['TCG Marketplace Price']) + 0.99
    const bMarketPrice = Number.parseFloat(b['TCG Marketplace Price']) + 0.99
    const aDifference = aMarketPrice - aPrice
    const bDifference = bMarketPrice - bPrice
    return bDifference - aDifference
  })
  // TODO: filter out any below a certain threshold

  // print out what the card is currently listed at, what the market price is and what the difference is

  let totalImpact = 0
  for (const row of sortedByDifference) {
    const currentPrice = Number.parseFloat(row['TCG Low Price With Shipping'])
    const marketPrice = Number.parseFloat(row['TCG Marketplace Price']) + 0.99
    const difference = marketPrice - currentPrice
    totalImpact += difference
    console.log(
      `Card: ${row['Product Name']} is currently listed at: $${currentPrice}, the market price is: $${marketPrice}, the difference is: $${difference}`,
    )
    // set the market price to the lowest price
    // subtract .99 to get my shipping cost
    const lowestPrice = currentPrice - 0.99
    // minimum price is 0.10
    row['TCG Marketplace Price'] = lowestPrice >= 0.1 ? lowestPrice.toFixed(2) : '0.10'
  }

  console.log('Total impact: $', totalImpact)
  const csv = json2csv.parse(sortedByDifference)
  const date = new Date().toISOString().split('T')[0]
  fs.writeFileSync(path.resolve('.', './updatedPrices_' + date + '.csv'), csv)
}
