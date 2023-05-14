import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

class Chatbot extends Component {
  render() {
    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#EF6C00',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#EF6C00',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };
    const steps = [
      {
        id: '1',
        message: 'Welcome to our store!',
        trigger: '2',
      },
      {
        id: '2',
        message: 'How can I help you today?',
        trigger: '3',
      },
      {
        id: '3',
        user: true,
        trigger: '4',
      },
      
      {
        id: '4',
        message: 'Great! Please enter your order number:.',
        end: true,
      },
    ];

    return (
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    );
  }
}

export default Chatbot;
