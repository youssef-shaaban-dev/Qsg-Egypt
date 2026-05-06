import { lang } from "./utility";

export function ArabicNumber({text}:{text:string}){

  const toArabicDigits = (str: string) => {
  return str.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

  return <span dangerouslySetInnerHTML={{__html:lang === 'ar' ? toArabicDigits(text): text}} />
}