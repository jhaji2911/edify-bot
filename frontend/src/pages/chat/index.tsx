import {
  Box,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { AiChat, useAsBatchAdapter } from "@nlux/react";
import { send } from "../../utils/send";
import { personas } from "../../utils/personas";
import "@nlux/themes/nova.css";
import bluebenzLogo from "../../assets/bluebenzLogo.png";
import "./style.css";
import { useState } from "react";

function Chat() {
  const adapter = useAsBatchAdapter(send, []);

  const [docType, setDocType] = useState(1);

  // Mock chat history for the sidebar
  const chatHistory = [
    {
      id: 1,
      type: 1,
      label: "Average Delay in supplies",
      prompt: "What is the average delay in deliveries?",
      icon: <span>🕣</span>,
    },
    {
      id: 2,
      type: 1,
      label: "Unit with highest energy efficiency",
      prompt: "Identify the unit with the highest energy efficiency.",
      icon: <span>⚡️</span>,
    },
    {
      id: 3,
      type: 2,
      label: "Count of employees",
      prompt: "Give me count of male and female employees?",
      icon: <span>1️⃣</span>,
    },
    {
      id: 4,
      type: 2,
      label: "Average Salary",
      prompt:
        "How many employee of more than average salary having position as IT support?",
      icon: <span>🙎🏻‍♂️</span>,
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === "HR") {
      setDocType(1);
    } else {
      setDocType(2);
    }
  };
  return (
    <div className="chat-section">
      <div className="sidebar">
        {/* Sidebar */}
        <h4 className="m-0">Chat History</h4>
        <div className="chat-list">
          <div>
            <h3>July</h3>
            {/* TODO: use chat history */}
            {chatHistory
              ?.filter(({ type }) => type === docType)
              ?.map((content) => (
                <a href="">{content.prompt}</a>
              ))}
          </div>
        </div>
      </div>
      <div className="main-content">
        {/* Main Chat Section */}
        <div className="chat-box-header">
          <img src={bluebenzLogo} alt="Logo" width={200} />
          <div>
            <FormControl>
              <RadioGroup
                row
                sx={{
                  color: "black",
                }}
                value={docType === 1 ? "HR" : "Manufacturing"}
                onChange={handleChange}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="HR" control={<Radio />} label="HR" />
                <FormControlLabel
                  value="Manufacturing"
                  control={<Radio />}
                  label="Manufacturing"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="chat-box-body">
          <Box>
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
                  conversationStarters: chatHistory
                    ?.filter(({ type }) => type === docType)
                    ?.map((content) => ({
                      icon: content.icon,
                      label: content.label,
                      prompt: content.prompt,
                    })),
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
