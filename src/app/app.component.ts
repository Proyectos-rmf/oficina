import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
// import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

// import defaultLanguage from "./../assets/i18n/en.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ofp';

  constructor(private translate: TranslateService) {
    // translate.setTranslation('es', defaultLanguage);
    this.translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
