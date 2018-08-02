import notifier from 'node-notifier';
import colors from 'colors/safe';


const defaultOptions = {
  title: '',
  message: '',
  level: '',
  notify: false,
};

function logger(options = defaultOptions) {
  const title = `${options.title.toUpperCase()}`;

  if (options.notify) {
    notifier.notify({
      title,
      message: options.message,
    });
  }

  const level = options.level || 'info';
  const msg = `${title}: ${options.message}`;

  switch (level) {
    case 'warn':
      console.warn(colors.yellow(msg));
      break;
    case 'error':
      console.error(colors.bgRed.white(msg));
      break;
    case 'special':
      console.log(colors.italic.cyan(msg));
      break;
    case 'info':
    default:
      console.info(colors.green.dim(msg));
  }
}

export default logger;
