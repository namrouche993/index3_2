
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


  export const emails_length_em=50;
  export const phonenumbers_length_pn=50;
  export const onlynumbers_length_on = 50;
  export const text_length_txt = 600;
  export const use_en_time = false;
  //#endregion initials inputs nb


      //#region date time zone (navigator.language)
      //export const userLocale = 'fr'//Intl.DateTimeFormat().resolvedOptions().locale //'fr'// editable maybe Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
      //export const navigator_language='fr-FR' //navigator.language // 'fr-FR' 'en-CA'  // editable
      export var userTimeZone = 'America/New_York' //Intl.DateTimeFormat().resolvedOptions().timeZone;
      export var usTimeZones = [  'America/New_York',  'America/Chicago',  'America/Denver',  'America/Los_Angeles',  'America/Anchorage',  'America/Adak',  'Pacific/Honolulu',  'America/Phoenix',  'America/Indiana/Indianapolis',  'America/Indiana/Knox',  'America/Indiana/Marengo',  'America/Indiana/Petersburg',  'America/Indiana/Tell_City',  'America/Indiana/Vevay',  'America/Indiana/Vincennes',  'America/Indiana/Winamac',  'America/Kentucky/Louisville',  'America/Kentucky/Monticello',  'America/Detroit',  'America/Menominee',  'America/St_Johns',  'America/Puerto_Rico',  'America/Montserrat',  'America/New_York',  'America/North_Dakota/Beulah',  'America/North_Dakota/Center',  'America/North_Dakota/New_Salem'];
      //#endregion date time zone
  



    //#region decimalseparator and thousand separator 
   /*
    const options = { style: 'decimal' };
    const formattedNumber = (1234567.73).toLocaleString(userLocale, options);
    const DecimalSeparator0 = formattedNumber.substring(9, 10)
    export let decimalSeparator = DecimalSeparator0
    const thousandSeparator00 = formattedNumber.substring(1, 2);
    let thousandSeparator0 = thousandSeparator00
    console.log('decimal separateur est :' + decimalSeparator +
      ' et thousand est :' + thousandSeparator0 +
      'et le nombre devients :' + formattedNumber)
      */
   //#endregion decimalseparator and thousand separator 


   let userLocale2 = 'en'//Intl.DateTimeFormat().resolvedOptions().locale //'fr'// editable maybe Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
   export function setInputValue_userLocale2(value) {
      userLocale2 = value;
    }
   export function getInputValue_userLocale2() {
        return userLocale2;
    }



    let navigator_language2 = 'en-US' //navigator.language // 'fr-FR' 'en-CA'  // editable
    export function setInputValue_navigator_language2(value) {
      navigator_language2 = value;
   //#region date format starting
      if(navigator_language2=='en-US'){
        if(usTimeZones.includes(userTimeZone)){
          var dateformatlanguage = 'mm/dd/aaaa'; 
          var splitdate='/';
        } else {
          var dateformatlanguage = 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
          var splitdate='/';
          //var [monthdate,daydate, yeardate] = dateformatlanguage.split(splitdate);
        }
        } else if(navigator_language2=='ko-KR' || navigator_language2=='hu-HU'){
          var dateformatlanguage = 'aaaa.mm.jj' // 'yyyy.mm.dd' // 1990.12.31
          var splitdate='.';
          //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);
    
        } else if(navigator_language2=='ja-JP' || navigator_language2=='ZH-CN'){
          var dateformatlanguage = 'aaaa/mm/jj' //'yyyy/mm/dd' // 1990/12/31
          var splitdate='/';
          //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);
    
        } else if(navigator_language2=='en-CA'){
          var dateformatlanguage = 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31
          var splitdate='-';
          //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);
    
        } else if(navigator_language2=='de-DE' || navigator_language2=='ru-RU' || navigator_language2=='tr-TR'){
          var dateformatlanguage = 'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
          var splitdate='.';
          //var [daydate,monthdate,yeardate] = dateformatlanguage.split(splitdate);
    
        } else {
          // european and other formats
          var dateformatlanguage = 'jj/mm/aaaa' // 'dd/mm/yyyy' // 31/12/1990
          var splitdate='/';
          //var [daydate,monthdate,yeardate] = dateformatlanguage.split(splitdate);
        }
           //#endregion date format starting


     }
    export function getInputValue_navigator_language2() {
         return navigator_language2;
     }

     
     export function getValue_decimalSeparator2() {
      let decimalSeparator2 = (1234567.73).toLocaleString(userLocale2, { style: 'decimal' }).substring(9, 10)
      return decimalSeparator2;
    }

    export function getVal_dateformatlanguage() {
      return dateformatlanguage;
    }

    
    export function getVal_splitdate() {
      return splitdate;
    }
  


    let condition_split2=true
    export function setInputValue_condition_split2(value) {
      condition_split2 = value;
     }
    export function getInputValue_condition_split2() {
         return condition_split2;
     }


   /*
   //#region date format starting
   let navigator_language = getInputValue_navigator_language2()
   if(navigator_language=='en-US'){
    if(usTimeZones.includes(userTimeZone)){
      var dateformatlanguage = 'mm/dd/aaaa'; 
      var splitdate='/';
    } else {
      var dateformatlanguage = 'jj/mm/aaaa' // 'mm/dd/yyyy'; // 12/31/1990 edit it later , modify it later  , change it later
      var splitdate='/';
      //var [monthdate,daydate, yeardate] = dateformatlanguage.split(splitdate);
    }
    } else if(navigator_language=='ko-KR' || navigator_language=='hu-HU'){
      var dateformatlanguage = 'aaaa.mm.jj' // 'yyyy.mm.dd' // 1990.12.31
      var splitdate='.';
      //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);

    } else if(navigator_language=='ja-JP' || navigator_language=='ZH-CN'){
      var dateformatlanguage = 'aaaa/mm/jj' //'yyyy/mm/dd' // 1990/12/31
      var splitdate='/';
      //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);

    } else if(navigator_language=='en-CA'){
      var dateformatlanguage = 'aaaa-mm-jj' //'yyyy-mm-dd' // 1990-12-31
      var splitdate='-';
      //var [yeardate,monthdate,daydate] = dateformatlanguage.split(splitdate);

    } else if(navigator_language=='de-DE' || navigator_language=='ru-RU' || navigator_language=='tr-TR'){
      var dateformatlanguage = 'jj.mm.aaaa' //'dd.mm.yyyy' // 12.31.1990
      var splitdate='.';
      //var [daydate,monthdate,yeardate] = dateformatlanguage.split(splitdate);

    } else {
      // european and other formats
      var dateformatlanguage = 'jj/mm/aaaa' // 'dd/mm/yyyy' // 31/12/1990
      var splitdate='/';
      //var [daydate,monthdate,yeardate] = dateformatlanguage.split(splitdate);
    }
    export var dateformatlanguage_to_export = dateformatlanguage;
    export var splitdate_to_export = splitdate;
    //#endregion date format starting
    */