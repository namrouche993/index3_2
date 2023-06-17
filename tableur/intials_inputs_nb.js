
  //#region initials inputs nb
  export const last_row_after_header = 15;

  export const currencyht_nbnb = '$' //'DA'
  export const currencyht_toshow_nbnb = '' // ' $' // ' DA'  ///
  export const afterdigit_nbnb = 2;
  export const smallafterdigit_nbnb = Number(`1e-${afterdigit_nbnb}`)  // like 0.01 with afterdigit2
  export const afterdigitsmallnb_nbnb = 17;
  export const bignb_nbnb = 1e17;
  export const smallnb_nbnb = 1e-17;
  export const decimalnumbers_toshow_withoutrenderer_innumbers_nbnb = 10;
  export const usegrouping_nbnb_if_true = true;
  export const is_negativenb_accepted_nbnb=true;
  // export const is_float_accepted_nbnb = true;  // bayna beli true


  export const currencyht_intint = '' //'DA'
  export const currencyht_toshow_intint = '' // ' $' // ' DA'  ///
  export const afterdigit_intint = 0;
  export const smallafterdigit_intint = Number(`1e-${afterdigit_intint}`)  // like 0.01 with afterdigit2
  export const afterdigitsmallnb_intint = 17;
  export const bignb_intint = 1e17;
  export const smallnb_intint = 1e-17;
  export const decimalnumbers_toshow_withoutrenderer_innumbers_intint = 2;
  export const usegrouping_intint_if_true = false;
  export const is_negativenb_accepted_intint = false;
  export const is_float_accepted_intint = false;



  export const afterdigit_percentage_percperc = 2; //  how many decimal numbers will be displayed in renderer !
  export const smallafterdigit_percentage_percperc = Number(`1e-${afterdigit_percentage_percperc}`)  // like 0.01 with afterdigit2 ,  even though the value is small than this number , so displays it in renderer
  export const afterdigitsmallnb_percentage_percperc = 10; // even though the number is too small than the previous number (0.01) and it small than this number, so don't display it , and instead of it , display 0 because of maximumFractionDigits=this number
  export const bignbpercent_percperc = 1e10;
  export const smallnbpercent_percperc = 1e-10;
  export const decimalnumbers_toshow_withoutrenderer_inpercentage_percperc=10;
  export const is_negativenb_accepted_percperc = true;
  export const is_float_accepted_percperc = true;

  export const emails_length_em=30;
  export const phonenumbers_length_pn=20;
  export const onlynumbers_length_on = 20;
  //#endregion initials inputs nb

      //#region date time zone (navigator.language)
      export const userLocale = Intl.DateTimeFormat().resolvedOptions().locale //'fr'// editable maybe Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
      export const navigator_language=navigator.language // 'fr-FR' 'en-CA'  // editable
      export var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      export var usTimeZones = [  'America/New_York',  'America/Chicago',  'America/Denver',  'America/Los_Angeles',  'America/Anchorage',  'America/Adak',  'Pacific/Honolulu',  'America/Phoenix',  'America/Indiana/Indianapolis',  'America/Indiana/Knox',  'America/Indiana/Marengo',  'America/Indiana/Petersburg',  'America/Indiana/Tell_City',  'America/Indiana/Vevay',  'America/Indiana/Vincennes',  'America/Indiana/Winamac',  'America/Kentucky/Louisville',  'America/Kentucky/Monticello',  'America/Detroit',  'America/Menominee',  'America/St_Johns',  'America/Puerto_Rico',  'America/Montserrat',  'America/New_York',  'America/North_Dakota/Beulah',  'America/North_Dakota/Center',  'America/North_Dakota/New_Salem'];
      //#endregion date time zone
  

    //#region decimalseparator and thousand separator 
    const options = { style: 'decimal' };
    const formattedNumber = (1234567.73).toLocaleString(userLocale, options);
    const DecimalSeparator0 = formattedNumber.substring(9, 10)
    export let decimalSeparator = DecimalSeparator0
    const thousandSeparator00 = formattedNumber.substring(1, 2);
    let thousandSeparator0 = thousandSeparator00
    console.log('decimal separateur est :' + decimalSeparator +
      ' et thousand est :' + thousandSeparator0 +
      'et le nombre devients :' + formattedNumber)
   //#endregion decimalseparator and thousand separator 