/*
|--------------------------------------------------------------------------
| Site Environment
|--------------------------------------------------------------------------
*/
let env;
// env = 'localhost';
//env = 'develop';
//env = 'release';
env = 'production';

/*
|--------------------------------------------------------------------------
| Site Version
|--------------------------------------------------------------------------
*/
let version  = "0.0.4";

/*
|--------------------------------------------------------------------------
| Site Params
|--------------------------------------------------------------------------
*/

let params = {
  env: env,
  debug: false,
  port: null,
  host: null,
  https: null,
  version: version,
  base_url: null,
  api_url: null,
  analytics_id: '',
  robots_config: {
    UserAgent: '*',
    Disallow: '/'
  },
  is_human: false,
  is_human_pause: 0, // in seconds
  chromedriver_path: null,
  chrome_args: null,
  chromeOptions: null,
  logLevel: 'debug',
  tokbox_api_key: '46953314',
  tokbox_api_secret: '8748c53a96232846a08c3817646f2fef410b64f8',
};


switch(params.env)
{

  case 'localhost':
    params.base_url = 'http://localhost:3000';
    params.port = 3000;
    params.host = 'localhost';
    params.https = false;
    params.is_human = true;
    params.is_human_pause = 2;
    break;

  case 'feature':
    params.base_url = 'https://vercel-feature.vaah.dev';
    break;

  case 'develop':
    params.base_url = 'https://vercel-develop.vaah.dev';
    //params.is_human = true;
    //params.is_human_pause = 2;
    params.logLevel= 'error';
    break;

  case 'staging':
    params.base_url = 'https://vaah.dev';
    params.api_url = 'https://api.vaah.dev';
    params.logLevel = 'silent';
    break;

  case 'production':
    params.base_url = 'https://meet.webreinvent.com';
    params.logLevel = 'silent';
    params.robots_config = null;
    params.logLevel = 'silent';
    params.debug = false;
    break;
}


if(!params.is_human)
{
  params.chromeOptions= {
    args: [
      '--no-sandbox',
      '--disable-infobars',
      '--headless',
      '--disable-gpu',
      '--window-size=1440,735'
    ],
  }
}

if(
  params.env === 'localhost'
)
{
  console.log('env params--->', params);
}


module.exports = params;
