import { Layout, Space, Image, Typography, Col, Button } from 'antd'
import React from 'react'
import '../../css/greenLog.css'
import logo from '../../assets/logo.png';
import DataBlock from '../component/DataBlock';
import Agenda from '../component/Agenda';
import Speakers from '../component/Speakers';
import Link from 'antd/es/typography/Link';

const GreenLogistics = () => {
    const { Content } = Layout;
    const { Title } = Typography;

  return (
    <Space direction="vertical" className='mainSpace' size={[0, 48]}>
        <Layout>
          <Content className='containerStyle'>
            <div className='innerDiv'>
              <Col pull={10} span={24}>
              <Image 
                src={logo}
                alt='logo'
                width={120}
                preview={false}
              />
              </Col>
              <Col span={24}>
                <Title className='headText' level={1}>The Green Logistics <br /> Summit & Awards</Title>
            </Col>

            <Col style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <DataBlock data={14} title='Speakers' />
              <DataBlock data={8} title='Sessions' />
              <DataBlock data={20} title='Awards' />
            </Col>

            <Col>
              <Title className='subtitleText' level={2}>20 September 2023 <br /> | Virtual event |</Title>
            </Col>

            <Col>
              <Button className='registerBtn'>
                <Link href='http://thegreenlogisticssummitandaward.co/'> Register now </Link> 
              </Button>
            </Col>
            </div>

            <Col className='colContaainer'>
              <Agenda />
            </Col>

            <Col span={24}>
              <Speakers />
            </Col>

            <Col span={24}>
              <Typography style={{backgroundColor: '#000', color: '#fff'}}>
                © 2023 Green Logistics. All Rights Reserved.
              </Typography>
            </Col>

          </Content>
        </Layout>
    </Space>
  )
}

export default GreenLogistics