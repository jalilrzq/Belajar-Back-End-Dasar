// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

const cpuInformation = process.memoryUsage();
console.log(cpuInformation);
 
/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/