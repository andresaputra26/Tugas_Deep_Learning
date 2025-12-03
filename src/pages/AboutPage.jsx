import React from 'react';
import { Container, Card, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { FaInfoCircle, FaUsers, FaCog } from 'react-icons/fa';


const AboutPage = () => {
  return (
    <div className='aboutpage min-vh-100'>
      <Container>
        <Tabs defaultActiveKey="getting-started" id="justify-tab-example" className="mb-3" justify>
                <Tab eventKey="getting-started" 
                    title={
                    <span>
                        <FaInfoCircle className='me-2' />
                        Getting Started
                    </span>
                }>
                    <Card body className='fade-up'>
                        <h4>Getting Started with SiLa</h4>
                        <p>Learn the basics of using Sisa for sign language translation</p>

                        <h5>What is SiLa?</h5>
                        <p>SiLa is a powerful sign language translation tool that uses advanced AI to translate between sign language and text. It supports both real-time gesture translation and video translation.</p>

                        <h5>Key Features</h5>
                        <ul>
                            <li>Real-time gesture translation using your camera</li>
                            <li>Library SIBI</li>
                        </ul>

                        <h5>System Requirements</h5>
                        <p>SiLa works best on modern browsers like Chrome, Firefox, Safari, and Edge. For gesture translation, you'll need a webcam or camera on your device.</p>
                    </Card>
                </Tab>
          
                <Tab eventKey="setting" title={
                    <span>
                        <FaCog className='me-2' />
                        Setting
                    </span>
                }>
                    <Card body className='fade-up'>
                        <h4>Setting Guide</h4>
                        <p>Learn how to customize SiLa to your preferences</p>

                        <h5>Language Settings</h5>
                        <p>You can customize which sign languages are supported in your translation:</p>
                        <ul>
                            <li>Sistem Isyarat Bahasa Indonesia (SIBI)</li>
                        </ul>
                    </Card>
                </Tab>
            </Tabs>
      </Container>
    </div>
  )
}

export default AboutPage