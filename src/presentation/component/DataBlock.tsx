import { Row, Col, Typography } from 'antd'
import React from 'react'
import '../../css/dataBlock.css'

type myProps = {
    data: number,
    title: string
}
const DataBlock: React.FC<myProps> = ({data, title}) => {
  return (
    <Row style={{display: 'flex', flexDirection: 'column'}}>
        <Col>
            <Typography className='dataText'>
                {data}+
            </Typography>
        </Col>

        <Col>
            <Typography className='titleText'>
                {title}
            </Typography>
        </Col>
    </Row>
  )
}

export default DataBlock