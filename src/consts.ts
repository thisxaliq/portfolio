import config from './json/config.json'; 
import site from './json/site.json';

export const defaultLanguage = config.defaultLanguage;
export const langs = config.langs;
export const sitecfg = site;



export function getLangCfg(lang: string) {
  if (config.langs.includes(lang)) {
    return config[lang];
  }else {
    return config[defaultLanguage];
  }
}