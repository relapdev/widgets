const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");

const widgetIdInput = document.querySelector("#widgetIdInput");
const urlInput = document.querySelector("#urlInput");
const tokenInput = document.querySelector("#tokenInput");

const setValues = () => {
    const widgetId = widgetIdInput.value;
    const url = urlInput.value;
    const token = tokenInput.value;

    editor.setValue(getCode({ widgetId, url, token }));
}

setValues();