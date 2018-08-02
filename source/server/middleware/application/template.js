export default function template(initialState = {}, helmet = {}, content = '', styles = '') {
  let scripts = '<script src="js/app.bundle.js"> </script>';
console.log('Helmet ->', helmet);

  if (!Object.keys(helmet).length) {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              ${styles}
            </head>
            <body>
              <div id="react-app" style="height: 100%;">${content}</div>
              <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
              </script>
              ${scripts}
            </body>
            </html>
            `;
  }

  return `<!DOCTYPE html>
          <html ${helmet.htmlAttributes.toString()} lang="en">
          <head>
            ${helmet.title.toString()}
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${styles}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
            ${helmet.noscript.toString()}
            <div id="react-app" style="height: 100%;">${content}</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            ${scripts}
            ${helmet.script.toString()}
          </body>
          </html>
          `;
}
