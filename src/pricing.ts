import * as csvtojson from 'csvtojson'
import * as json2csv from 'json2csv'
import * as fs from 'node:fs'
import * as path from 'node:path'

import {PriceFloor, ShippingCost} from './constants'
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
  // for each row, compare the (tcgMarketplacePrice+0.99shipping) to the tcgLowPriceWithShipping
  // sort by the biggest difference
  const sortedByDifference = prices.sort((a, b) => {
    const aPrice = Number.parseFloat(a['TCG Low Price With Shipping'])
    const bPrice = Number.parseFloat(b['TCG Low Price With Shipping'])
    const aMarketPrice = Number.parseFloat(a['TCG Marketplace Price']) + ShippingCost
    const bMarketPrice = Number.parseFloat(b['TCG Marketplace Price']) + ShippingCost
    const aDifference = aMarketPrice - aPrice
    const bDifference = bMarketPrice - bPrice
    return bDifference - aDifference
  })
  // TODO: filter out any below a certain threshold

  // print out what the card is currently listed at, what the market price is and what the difference is

  let totalImpact = 0
  for (const row of sortedByDifference) {
    const currentPrice = Number.parseFloat(row['TCG Low Price With Shipping'])
    const marketPrice = Number.parseFloat(row['TCG Marketplace Price']) + ShippingCost
    const difference = marketPrice - currentPrice
    totalImpact += difference
    console.log(
      `Card: ${row['Product Name']} is currently listed at: $${currentPrice}, the market price is: $${marketPrice}, the difference is: $${difference}`,
    )
    // set the market price to the lowest price
    // subtract .99 to get my shipping cost
    const lowestPrice = currentPrice - ShippingCost
    // minimum price is 0.10
    row['TCG Marketplace Price'] = lowestPrice >= PriceFloor ? lowestPrice.toFixed(2) : PriceFloor.toFixed(2)
  }

  console.log('Total impact: $', totalImpact)
  const csv = json2csv.parse(sortedByDifference)
  const date = new Date().toISOString().split('T')[0]
  fs.writeFileSync(path.resolve('.', './updatedPrices_' + date + '.csv'), csv)
}

export const analyzeCurrentPricesBySets = async (sets?: string[]) => {
  let prices = await readPrices()

  // if sets are provided, filter out the prices that are not in the sets
  if (sets) {
    prices = prices.filter((price) => sets.includes(price['Set Name']))
  }

  // group by set name and sum the total market price for each set
  // we can't use reduce here
  const setTotals: {[key: string]: number} = {}
  for (const price of prices) {
    if (!setTotals[price['Set Name']]) {
      setTotals[price['Set Name']] = 0
    }

    setTotals[price['Set Name']] += Number.parseFloat(price['TCG Marketplace Price'])
  }

  // round to 2 decimal places
  for (let i = 0; i < Object.keys(setTotals).length; i++) {
    const set = Object.keys(setTotals)[i]

    setTotals[set] = Math.round(setTotals[set] * 100) / 100
  }

  // sort items by total price
  const sortedSets = Object.keys(setTotals).sort((a, b) => setTotals[b] - setTotals[a])

  for (const set of sortedSets) {
    // print with even spacing and padding between the set name and the total
    console.log(set.padEnd(80, ' '), setTotals[set])
  }
}
