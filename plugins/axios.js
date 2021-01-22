export default function ({ $axios, redirect }) {
  $axios.defaults.baseURL = 'https://nalatenschap-do-hfuai.ondigitalocean.app/';

  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });
}
