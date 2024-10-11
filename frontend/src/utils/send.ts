
// A demo API by NLUX that connects to OpenAI
// and returns a stream of Server-Sent events
const demoProxyServerUrl = 'http://192.168.1.253:5333/api/production_metrics';

// Function to send query to the server and receive a stream of chunks as response
export const send = async (
    prompt: string,
) => {
    const body = {'user_prompt': prompt};
    const response = await fetch(demoProxyServerUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });

    if (response.status !== 200) {
        const {error} = await response.json()
        // console.log('response->', response.json())
        // console.error(new Error('Failed to connect to the server'));
        return error;
    }

    if (!response.body) {
        return;
    }

    // Read a stream of server-sent events
    // and feed them to the observer as they are being generated
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();

    while (true) {
        const {value, done} = await reader.read();
        if (done) {
            break;
        }

        const content = textDecoder.decode(value);
        if (content) {
            return (JSON.parse(content).summary_response);
        }
    }
};
