async function start() {
  return await Promise.resolve('async works');
}

start().then(console.log);
