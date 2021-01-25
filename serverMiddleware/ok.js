export default {
  handler(req, res) {
    res.write('Everything ok!');
    res.end();
  },
  path: '/test',
};
