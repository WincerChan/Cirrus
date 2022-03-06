import App from './App.svelte';
import "./entrypoint";

const app = new App({
    target: document.querySelector("#svelte"),
});

export default app;