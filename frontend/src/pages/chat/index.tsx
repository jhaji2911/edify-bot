import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  IconButton,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AiChat, useAsBatchAdapter } from "@nlux/react";
import { send } from "../../utils/send";
import { personas } from "../../utils/personas";
import "@nlux/themes/nova.css";

const drawerWidth = 300;

function Chat() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const adapter = useAsBatchAdapter(send, []);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Mock chat history for the sidebar
  const chatHistory = [
    { id: 1, message: "What is the average delay in deliveries?" },
    { id: 2, message: "Identify the unit with the highest energy efficiency." },
  ];

  const drawer = (
    <Box sx={{ width: drawerWidth, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Chat History
      </Typography>
      <List>
        {chatHistory.map((chat) => (
          <ListItem key={chat.id} button>
            <ListItemText primary={chat.message} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "100vh", background: "linear-gradient(to bottom, #646cffaa, #61dafbaa)" }}>
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#2a2a2a",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Chat Interface
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="chat history"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Chat Section */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Chat Area */}
        <Paper
          elevation={3}
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            padding: 2,
            marginBottom: 2,
            borderRadius: 2,
          }}
        >
          <AiChat
            conversationOptions={{
              conversationStarters: [
                {
                  icon: <span>🕣</span>,
                  label: "Average Delay in supplies",
                  prompt: "What is the average delay in deliveries across all suppliers.",
                },
                {
                  icon: <span>⚡️</span>,
                  label: "Unit with highest energy efficiency",
                  prompt: "Identify the unit with the highest energy efficiency.",
                },
              ],
            }}
            adapter={adapter}
            personaOptions={personas}
          />
        </Paper>

        {/* Input Area */}
      </Box>
    </Box>
  );
}

export default Chat;