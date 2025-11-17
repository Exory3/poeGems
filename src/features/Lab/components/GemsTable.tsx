import type {TTopEvContributor} from '../topEvContributors'
import {contributionStyle, priceStyle, tableStyle} from './GemsTable.styles'

function GemsTable({topContributors}: {topContributors: TTopEvContributor[]}) {
  return (
    <table className={tableStyle()}>
      <thead>
        <tr>
          <th className={priceStyle()}>price</th>
          <th>odds</th>
          <th className={contributionStyle()}>contribution</th>
        </tr>
      </thead>
      <tbody>
        {topContributors.map(({price, contribution, prob}) => (
          <tr key={price}>
            <th className={priceStyle()}>{price}c</th>
            <th>{(prob * 100).toFixed(1)}%</th>
            <th className={contributionStyle()}>{contribution.toFixed(2)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GemsTable
