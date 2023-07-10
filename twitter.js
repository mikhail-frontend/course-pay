const app = document.getElementById('history-app').shadowRoot
const content = app.getElementById('content');
const tab = content.querySelector('#tabs-container #tabs-content #history');
const history = tab.shadowRoot;
const cards =history.querySelectorAll('.history-cards history-item');
cards.forEach(card => {
    const html = card.shadowRoot;
    const checkbox = html.querySelector('#checkbox');
    checkbox.click()
})
