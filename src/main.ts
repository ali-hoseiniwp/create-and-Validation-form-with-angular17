import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.config';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
