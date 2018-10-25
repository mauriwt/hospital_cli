import { environment } from '../../environments/environment';
export const config: any = {
  socketUrl: "ws://localhost:8080/ZEDE/ws/notificaciones",
  oauth: {
    remote: "http://localhost:3636",
    local: environment.rest_url,
    authorize_uri: "/oauth/authorize",
    logout_full_uri: "/auth/logout",
    logout_uri: "/oauth/logout",
    login_info: "/oauth/me",
    check_uri: "/oauth/autentication/check",
    redirect_uri: "/oauth/autentication",
    client_id: "hospital"
  },
  APIRest:
    {
      url: {
        local: environment.rest_url,
        core: "http://10.20.9.1:2525",
        //core: "http://172.18.0.11:8080/ycore",
      },
      catalogo:{
        base:'/catalogos',
      },
    },

  defaultLocale: "es",

  API_URL: "assets/api",

  menu_speed: 200,

  smartSkin: "smart-style-0",

  alertTimeOut: 4000,


  skins: [
    {
      name: "smart-style-0",
      logo: "assets/img/logo.png",
      skinBtnClass: "btn btn-block btn-xs txt-color-white margin-right-5",
      style: {
        backgroundColor: '#4E463F'
      },
      label: "Smart Default"
    },

    {
      name: "smart-style-1",
      logo: "assets/img/logo-white.png",
      skinBtnClass: "btn btn-block btn-xs txt-color-white",
      style: {
        background: '#3A4558'
      },
      label: "Dark Elegance"
    },

    {
      name: "smart-style-2",
      logo: "assets/img/logo-blue.png",
      skinBtnClass: "btn btn-xs btn-block txt-color-darken margin-top-5",
      style: {
        background: '#fff'
      },
      label: "Ultra Light"
    },

    {
      name: "smart-style-3",
      logo: "assets/img/logo-pale.png",
      skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
      style: {
        background: '#f78c40'
      },
      label: "Google Skin"
    },

    {
      name: "smart-style-4",
      logo: "assets/img/logo-pale.png",
      skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
      style: {
        background: '#bbc0cf',
        border: '1px solid #59779E',
        color: '#17273D !important'
      },
      label: "PixelSmash"
    },

    {
      name: "smart-style-5",
      logo: "assets/img/logo-pale.png",
      skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
      style: {
        background: 'rgba(153, 179, 204, 0.2)',
        border: '1px solid rgba(121, 161, 221, 0.8)',
        color: '#17273D !important'
      },
      label: "Glass"
    },


  ],

  GOOGLE_API_KEY: 'AIzaSyDd8YW8k_J-Jkti-W4QNk5dL8O_5_2QUWY',

  sound_path: "assets/sound/",
  sound_on: true,


  /**
   * DEBUGGING MODE
   * debugState = true; will spit all debuging message inside browser console.
   * The colors are best displayed in chrome browser.
   */

  debugState: false,
  debugStyle: 'font-weight: bold; color: #00f;',
  debugStyle_green: 'font-weight: bold; font-style:italic; color: #46C246;',
  debugStyle_red: 'font-weight: bold; color: #ed1c24;',
  debugStyle_warning: 'background-color:yellow',
  debugStyle_success: 'background-color:green; font-weight:bold; color:#fff;',
  debugStyle_error: 'background-color:#ed1c24; font-weight:bold; color:#fff;',


  /**
   *  VOICE CONTROL
   */
  voice_command: true,
  voice_command_auto: false,


  /**
   *  Sets the language to the default 'en-US'. (supports over 50 languages
   *  by google)
   *
   *  Afrikaans         ['af-ZA']
   *  Bahasa Indonesia  ['id-ID']
   *  Bahasa Melayu     ['ms-MY']
   *  CatalГ            ['ca-ES']
   *  ДЊeЕЎtina         ['cs-CZ']
   *  Deutsch           ['de-DE']
   *  English           ['en-AU', 'Australia']
   *                    ['en-CA', 'Canada']
   *                    ['en-IN', 'India']
   *                    ['en-NZ', 'New Zealand']
   *                    ['en-ZA', 'South Africa']
   *                    ['en-GB', 'United Kingdom']
   *                    ['en-US', 'United States']
   *  EspaГ±ol          ['es-AR', 'Argentina']
   *                    ['es-BO', 'Bolivia']
   *                    ['es-CL', 'Chile']
   *                    ['es-CO', 'Colombia']
   *                    ['es-CR', 'Costa Rica']
   *                    ['es-EC', 'Ecuador']
   *                    ['es-SV', 'El Salvador']
   *                    ['es-ES', 'EspaГ±a']
   *                    ['es-US', 'Estados Unidos']
   *                    ['es-GT', 'Guatemala']
   *                    ['es-HN', 'Honduras']
   *                    ['es-MX', 'MГ©xico']
   *                    ['es-NI', 'Nicaragua']
   *                    ['es-PA', 'PanamГЎ']
   *                    ['es-PY', 'Paraguay']
   *                    ['es-PE', 'PerГє']
   *                    ['es-PR', 'Puerto Rico']
   *                    ['es-DO', 'RepГєblica Dominicana']
   *                    ['es-UY', 'Uruguay']
   *                    ['es-VE', 'Venezuela']
   *  Euskara           ['eu-ES']
   *  FranГ§ais         ['fr-FR']
   *  Galego            ['gl-ES']
   *  Hrvatski          ['hr_HR']
   *  IsiZulu           ['zu-ZA']
   *  ГЌslenska         ['is-IS']
   *  Italiano          ['it-IT', 'Italia']
   *                    ['it-CH', 'Svizzera']
   *  Magyar            ['hu-HU']
   *  Nederlands        ['nl-NL']
   *  Norsk bokmГҐl     ['nb-NO']
   *  Polski            ['pl-PL']
   *  PortuguГЄs        ['pt-BR', 'Brasil']
   *                    ['pt-PT', 'Portugal']
   *  RomГўnДѓ          ['ro-RO']
   *  SlovenДЌina       ['sk-SK']
   *  Suomi             ['fi-FI']
   *  Svenska           ['sv-SE']
   *  TГјrkГ§e          ['tr-TR']
   *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
   *  PСѓСЃСЃРєРёР№     ['ru-RU']
   *  РЎСЂРїСЃРєРё      ['sr-RS']
   *  н•њкµ­м–ґ         ['ko-KR']
   *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
   *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
   *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
   *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
   *  ж—Ґжњ¬иЄћ         ['ja-JP']
   *  Lingua latД«na    ['la']
   */
  voice_command_lang: 'en-US',
  /**
   *  Use localstorage to remember on/off (best used with HTML Version)
   */
  voice_localStorage: false,
  /**
   * Voice Commands
   * Defines all voice command variables and functions
   */

  voice_commands: <any>{

    'show dashboard': {
      type: 'navigate', payload: ['/dashboard/+analytics']
    },
    'show +social': {
      type: 'navigate', payload: ['/dashboard/+social']
    },
    'show outlook': {
      type: 'navigate', payload: ['/outlook']
    },
    'show graphs': {
      type: 'navigate', payload: ['/graphs/chart-js']
    },
    'show flot chart': {
      type: 'navigate', payload: ['/graphs/flot-charts']
    },
    'show morris chart': {
      type: 'navigate', payload: ['/graphs/morris-charts']
    },
    'show inline chart': {
      type: 'navigate', payload: ['/graphs/sparklines']
    },
    'show dygraphs': {
      type: 'navigate', payload: ['/graphs/dygraphs']
    },
    'show tables': {
      type: 'navigate', payload: ['/tables/normal']
    },
    'show data table': {
      type: 'navigate', payload: ['/tables/datatables']
    },
    'show form': {
      type: 'navigate', payload: ['/forms/elements']
    },
    'show form layouts': {
      type: 'navigate', payload: ['/forms/layouts']
    },
    'show form validation': {
      type: 'navigate', payload: ['/forms/validation']
    },
    'show form elements': {
      type: 'navigate', payload: ['/forms/bootstrap-elements']
    },
    'show form plugins': {
      type: 'navigate', payload: ['/forms/plugins']
    },
    'show form wizards': {
      type: 'navigate', payload: ['/forms/wizards']
    },
    'show bootstrap editor': {
      type: 'navigate', payload: ['/forms/editors']
    },
    'show dropzone': {
      type: 'navigate', payload: ['/forms/dropzone']
    },
    'show image cropping': {
      type: 'navigate', payload: ['/forms/image-cropping']
    },
    'show general elements': {
      type: 'navigate', payload: ['/ui/general-elements']
    },
    'show buttons': {
      type: 'navigate', payload: ['/ui/buttons']
    },
    'show fontawesome': {
      type: 'navigate', payload: ['/ui/icons/font-awesome']
    },
    'show glyph icons': {
      type: 'navigate', payload: ['/ui/icons/glyphicons']
    },
    'show flags': {
      type: 'navigate', payload: ['/ui/icons/flags']
    },
    'show grid': {
      type: 'navigate', payload: ['/ui/grid']
    },
    'show tree view': {
      type: 'navigate', payload: ['/ui/treeviews']
    },
    'show nestable lists': {
      type: 'navigate', payload: ['/ui/nestable-lists']
    },
    'show jquery U I': {
      type: 'navigate', payload: ['/ui/jquery-ui']
    },
    'show typography': {
      type: 'navigate', payload: ['/ui/typography']
    },
    'show calendar': {
      type: 'navigate', payload: ['/calendar']
    },
    'show widgets': {
      type: 'navigate', payload: ['/widgets']
    },
    'show gallery': {
      type: 'navigate', payload: ['/app-views/gallery']
    },
    'show maps': {
      type: 'navigate', payload: ['/maps']
    },
    'go back': (): any => {
      history.back();
    },
    'scroll up': (): any => {
      jQuery('html, body').animate({ scrollTop: 0 }, 100);
    },
    'scroll down': (): any => {
      jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 100);
    },
    'hide navigation': {
      type: 'layout',
      payload: 'hide navigation'
    },
    'show navigation': {
      type: 'layout',
      payload: 'show navigation'
    },
    'mute': {
      type: 'sound',
      payload: 'mute',
    },
    'sound on': {
      type: 'sound',
      payload: 'sound on',
    },
    'stop': {
      type: 'voice',
      payload: 'stop'
    },
    'help': {
      type: 'voice',
      payload: 'help on'
    },
    'got it': {
      type: 'voice',
      payload: 'help off'
    },
    'logout': {
      type: 'navigate',
      payload: ['/auth/login'],
    },
  },

  // DNI ECUADOR

  validateDNIEcuador: (cedula) => {
    if (cedula.length == 10) {
      let digito_region = cedula.substring(0, 2);
      if (digito_region >= 1 && digito_region <= 24) {
        let ultimo_digito = cedula.substring(9, 10);
        let pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));
        let numero1 = cedula.substring(0, 1);
        numero1 = (numero1 * 2);
        if (numero1 > 9) { numero1 = (numero1 - 9); }
        let numero3 = cedula.substring(2, 3);
        numero3 = (numero3 * 2);
        if (numero3 > 9) { numero3 = (numero3 - 9); }
        let numero5 = cedula.substring(4, 5);
        numero5 = (numero5 * 2);
        if (numero5 > 9) { numero5 = (numero5 - 9); }
        let numero7 = cedula.substring(6, 7);
        numero7 = (numero7 * 2);
        if (numero7 > 9) { numero7 = (numero7 - 9); }
        let numero9 = cedula.substring(8, 9);
        numero9 = (numero9 * 2);
        if (numero9 > 9) { numero9 = (numero9 - 9); }
        let impares = numero1 + numero3 + numero5 + numero7 + numero9;
        let suma_total = (pares + impares);
        let primer_digito_suma = String(suma_total).substring(0, 1);
        let decena = (parseInt(primer_digito_suma) + 1) * 10;
        let digito_validador = decena - suma_total;
        if (digito_validador == 10)
          digito_validador = 0;
        if (digito_validador == ultimo_digito) {
          return true;
        } else {
          return false;
        }

      } else {
        return false;
      }
    } else {
      return false;
    }

  },

  validarEmail: (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    return (false)
  },

  validarDocumento: (ruc) => {
    ruc = String(ruc);
    if (ruc.substring(0,2) < 0 || ruc.substring(0,2) > 24)
      return false;
    /* Para públicos tercer dígito debe ser 6*/
    if (ruc.substring(2,3) != 6){
      console.log('el tercer dígito debe ser igual a 6 para entidades públicas');
      return false;
    }
    /*Código de establecimiento */
    if (ruc.substring(9,4) < 1){
      console.log('el código de establecimiento no puede ser cero');
      return false;
    }
    let coeficientes = [3, 2, 7, 6, 5, 4, 3, 2];
    let digitos = ruc.substring(0,8);
    let digitosIniciales = digitos.split('', 8);
    let digitoVerificador = +ruc[8];
    let total = 0;
    digitosIniciales.forEach((digito, i) => {
      let valorPosicion = +digito*coeficientes[i];
      total = total + valorPosicion;
    });
    let residuo = total%11;
    let resultado;
    if(residuo == 0)
      resultado = 0;
    else
      resultado = 11 - residuo;

    if(resultado != digitoVerificador){
      console.log("Dígitos iniciales no validos contra dígito identificador");
      return false;
    }

    return true;
  },

};

// required for SmartNotification // @todo
Object.assign(window['jQuery'], {
  sound_on: config.sound_on,
  sound_path: config.sound_path
});
