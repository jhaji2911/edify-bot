import { AiChat, useAsStreamAdapter } from '@nlux/react';
import { send } from '../../utils/send';
import { personas } from '../../utils/personas';
import '@nlux/themes/nova.css';



function Chat() {
  const adapter = useAsStreamAdapter(send, []);

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