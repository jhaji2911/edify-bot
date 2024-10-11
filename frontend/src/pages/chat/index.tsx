import { AiChat, useAsBatchAdapter } from '@nlux/react';
import { send } from '../../utils/send';
import { personas } from '../../utils/personas';
import '@nlux/themes/nova.css';


function Chat() {
  const adapter = useAsBatchAdapter(send, []);
  return (
    <div className="card" style={{minWidth: 1000, minHeight: 100}}>
            {/* <InteractiveDemoOptions /> */}
    <AiChat
 conversationOptions={{
  conversationStarters: [
      {
          icon: <span>🕣</span>,
          label: 'Average Delay in supplies',
          prompt: 'What is the average delay in deliveries across all suppliers.'
      },
      {
          icon: <span>⚡️</span>,
          label: 'Unit with highest energy efficiency',
          prompt: 'Identify the unit with the highest energy efficiency.'
      },
  ]
}}
        adapter={adapter}
        personaOptions={personas}
    />
  </div>
  )
}

export default Chat