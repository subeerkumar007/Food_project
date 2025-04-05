import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Paper,
  TextField,
  Typography,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your Swagat Foods assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputMessage, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you with your order!",
        "You can check our menu for all available dishes.",
        "We offer delivery within a 5-mile radius.",
        "Our kitchen is open from 11 AM to 10 PM.",
        "You can place your order through our website or call us.",
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages((prev) => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'rgba(255, 111, 0, 0.9)',
          '&:hover': {
            backgroundColor: 'rgba(255, 111, 0, 1)',
            transform: 'scale(1.1) rotate(5deg)',
          },
          transition: 'all 0.3s ease-in-out',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-10px)',
            },
          },
        }}
      >
        <SmartToyIcon sx={{ fontSize: 30 }} />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            height: '80vh',
            maxHeight: '600px',
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: 'rgba(255, 111, 0, 0.1)' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={1}>
              <SmartToyIcon sx={{ color: 'rgba(255, 111, 0, 0.9)' }} />
              <Typography variant="h6">Swagat Foods Assistant</Typography>
            </Box>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 2 }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {messages.map((message, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: message.isBot ? 'flex-start' : 'flex-end',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  {message.isBot && (
                    <SmartToyIcon 
                      sx={{ 
                        color: 'rgba(255, 111, 0, 0.9)',
                        fontSize: 24,
                        mt: 1
                      }} 
                    />
                  )}
                  <Paper
                    sx={{
                      p: 2,
                      maxWidth: '70%',
                      backgroundColor: message.isBot ? 'rgba(255, 111, 0, 0.1)' : 'primary.main',
                      color: message.isBot ? 'text.primary' : 'white',
                      borderRadius: message.isBot ? '0 8px 8px 8px' : '8px 0 8px 8px',
                    }}
                  >
                    <Typography>{message.text}</Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <IconButton
                color="primary"
                onClick={handleSendMessage}
                sx={{
                  backgroundColor: 'rgba(255, 111, 0, 0.9)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 111, 0, 1)',
                  },
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot; 