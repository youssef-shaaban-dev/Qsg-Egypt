import { lang } from "./utility";

export function ArabicNumber({text}:{text:string}){

  const toArabicDigits = (str: string) => {
    if (!str) return "";
    return str.replace(/(ISO\s*\d+)|(\d)/gi, ( isoPart, digit) => {
      if (isoPart) {
        return isoPart;
      }
      return "٠١٢٣٤٥٦٧٨٩"[Number(digit)];
    });
  };

  return <span dangerouslySetInnerHTML={{__html:lang === 'ar' ? toArabicDigits(text): text}} />
}