import { AiChat, useAsBatchAdapter } from '@nlux/react';
import { send } from '../../utils/send';
import { personas } from '../../utils/personas';
import '@nlux/themes/nova.css';



function Chat() {
  const adapter = useAsBatchAdapter(send, []);

  return (
    <div className="card" style={{minWidth: 1000, minHeight: 100}}>
    <AiChat
        adapter={adapter}
        personaOptions={personas}
    />
  </div>
  )
}

export default Chat