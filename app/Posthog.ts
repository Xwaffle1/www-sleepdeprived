"use client";
import { PostHog } from 'posthog-node'

const client = new PostHog(
    'phc_XgojxKX5HZ1x7clcD1lo7sdFizZfqTNP3TDI5wnk9Ah',
    { host: 'https://app.posthog.com' }
)

// interface EventMessage { distinctId: string, event: string }

function getDistinctId() {
    // Check localStorage for distinctId and return it if it exists or set a new one and return it
    let distinctId = localStorage.getItem('distinctId');
    if (!distinctId) {
        distinctId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('distinctId', distinctId);
    }
    return distinctId;
}

export function sendEvent( event: string) {
    client.capture({distinctId: getDistinctId(), event: event});
    client.flush();
}