/**
 * Para que o middleware seja processado em alguns metodos,
 * precisa comentar o app.use(logs) e colocar ele na rota
 */

export function log(request, response, next) {
  const { url, method } = request;
  console.log(`${method} - ${url} at ${new Date()}`)

  // sem o next ele trava a aplicação no método, então precisa continuar
  return next()
};
