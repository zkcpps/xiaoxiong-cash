import * as React from 'react'
import DayRecord from './DayRecord'
import {TMonthRecord} from '../hooks/useRecordList'
import styled from 'styled-components'
import Divider from './Dividier'
import dayjs from 'dayjs'
import {MONTH} from '../lib/date'

type TProps = {
  monthRecord: TMonthRecord
}

const Header = styled.div`
  padding: 8px 18px;
  span {
    font-size: ${props => props.theme.$normalTextSize};
    color: ${props => props.theme.$subText}
  }
`

const RecordList = styled.li``

const MonthRecord: React.FC<TProps> = (props) => {
  const {month, recordList, incomeTotal, expenseTotal} = props.monthRecord

  const curtMonth = dayjs().format(MONTH)

  return (
    <RecordList>
      {
        curtMonth !== month &&  // 只显示非当月的记录
        <Header>
          <span>{month}</span>
          <Divider gap={8}/>
          <span style={{marginRight: 12}}>
            总支出￥{expenseTotal.toFixed(2)}
          </span>
          <span>
            总收入￥{incomeTotal.toFixed(2)}
          </span>
        </Header>
      }
      <ul>
        {
          recordList && recordList.map(dayRecord => (
            <DayRecord key={dayRecord.day} dayRecord={dayRecord}/>
          ))
        }
      </ul>
    </RecordList>
  )
}

export default MonthRecord
