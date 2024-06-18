import { elements } from "../data/DOMElements"


const settingsSetup = {
  theme: 'system',
  animation: 'on'
}
app.settingsSetup = settingsSetup;


elements.selectTheme.addEventListener('change', event => {
  const value = event.target.value;
  app.settingsSetup.theme = value;
});

