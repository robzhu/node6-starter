import sleep from 'sleep-promise';

async function main() {
  console.log('hello');
  await sleep(2000);
  console.log('meow');
}

main();
