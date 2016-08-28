import * as React from 'react'

export interface IStarsProps {
  count: number,
  isFetching: boolean
}
export default function Stars (props: IStarsProps) {
  const s = require('./starsComponent.css')
  return(
      <div className={s.stars}>
        {props.isFetching ? 'Fetching Stars' : props.count}
      </div>
    )
}

export {Stars }
