import {
  Box,
  Paper,
} from "@mui/material";
import { AiChat, useAsBatchAdapter } from "@nlux/react";
import { send } from "../../utils/send";
import { personas } from "../../utils/personas";
import "@nlux/themes/nova.css";
import bluebenzLogo from '../../assets/bluebenzLogo.png'
import './style.css'


function Chat() {
  const adapter = useAsBatchAdapter(send, []);

  // Mock chat history for the sidebar
  const chatHistory = [
    { id: 1, message: "What is the average delay in deliveries?" },
    { id: 2, message: "Identify the unit with the highest energy efficiency." },
  ];


  return (
    <div className="chat-section">
      <div className="sidebar">
        {/* Sidebar */}
        <h4 className="m-0">Chat History</h4>
        <div className="chat-list">
          <div>
            <h3>July</h3>
            {/* TODO: use chat history */}
            <a href="">Manufacturing</a>
            <a href="">Electricity consumption</a>
          </div>
        </div>
      </div>
      <div className="main-content">
        {/* Main Chat Section */}
        <div className="chat-box-header">
          <img src={bluebenzLogo} alt="Logo" width={200} />
          {/* <div>
            <FormControl>
              <RadioGroup
                row
                sx={{
                  color: 'black'
                }}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="HR"
                  control={<Radio />}
                  label="HR"
                />
                <FormControlLabel
                  value="Manufacturing"
                  control={<Radio />}
                  label="Manufacturing"
                />
              </RadioGroup>
            </FormControl>
          </div> */}
        </div>
        <div className="chat-box-body">
          <Box
            // component="main"
            sx={
              {
                //   flexGrow: 1,
                //   display: "flex",
                //   flexDirection: "column",
                //   justifyContent: "space-between",
                //   p: 3,
                //   width: {
                //     sm: `calc(100% - ${drawerWidth}px)`,
                //     padding: "0",
                //     paddingLeft: "2rem",
                //   },
              }
            }
          >
            {/* <Toolbar /> */}
            {/* Chat Area */}
            <Paper
              elevation={3}
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                height: "630px",
                padding: 2,
                borderRadius: 5,
              }}
            >
              <AiChat
                conversationOptions={{
                  conversationStarters: [
                    {
                      icon: <span>🕣</span>,
                      label: "Average Delay in supplies",
                      prompt:
                        "What is the average delay in deliveries across all suppliers.",
                    },
                    {
                      icon: <span>⚡️</span>,
                      label: "Unit with highest energy efficiency",
                      prompt:
                        "Identify the unit with the highest energy efficiency.",
                    },
                  ],
                }}
                adapter={adapter}
                personaOptions={personas}
              />
            </Paper>
            {/* Input Area */}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Chat;
