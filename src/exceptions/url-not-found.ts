import CommonException from "./common";
import { localeList } from "../config";
import i18n from "i18n";

const localeConfig = function () {
  return i18n.configure({
      locales: localeList,
      defaultLocale: 'en',
      directory: 'locales/url-not-found'
  });
};

class UrlNotFoundException extends CommonException {
  constructor(status:number, message:string, language?:string) {
    localeConfig();
    if (language) i18n.setLocale(language);
    super(status, i18n.__(message));
  }
}

export default UrlNotFoundException;