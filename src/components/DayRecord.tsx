import * as React from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import EachRecord from './EachRecord'
import {TDayRecord} from '../hooks/useRecordList'

type TProps = {
  dayRecord: TDayRecord
}

const StyledDayRecord = styled.ul`
  border-radius: 8px;
  margin-bottom: 8px;
  background: white;
  color: ${props => props.theme.$mainText};
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
`

const Header = styled.header`
  padding: 24px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FBFBFB;
  span {
    font-size: ${props => props.theme.$mainTextSize};
  }
`

const DateSection = styled.section``

const AmountSection = styled.section`
  display: flex;
  align-items: center;
  color: ${props => props.theme.$normalText};
  > span {
    font-size: ${props => props.theme.$normalTextSize};
  }
`

const DayRecord: React.FC<TProps> = (props) => {
  const {day, expenseTotal, incomeTotal, recordList} = props.dayRecord

  return (
    <StyledDayRecord>
      <Header>
        <DateSection>
          <span style={{marginRight: 8}}>{day}</span>
          <span>星期二</span>
        </DateSection>
        <AmountSection>
          <Tag>支</Tag>
          <span style={{marginRight: 16}}>
            {expenseTotal.toFixed(2)}
          </span>
          <Tag>收</Tag>
          <span>
            {incomeTotal.toFixed(2)}
          </span>
        </AmountSection>
      </Header>

      <ul>
        {
          recordList && recordList.map(record => (
            <EachRecord key={record.id} record={record}/>
          ))
        }
      </ul>
    </StyledDayRecord>
  )
}

export default DayRecord
