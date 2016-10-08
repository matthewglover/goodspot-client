import './main_helpers/configure_environment';
import { store, renderApp, hotRenderApp } from './main_helpers';


renderApp(store);

if (module.hot) hotRenderApp(store);
