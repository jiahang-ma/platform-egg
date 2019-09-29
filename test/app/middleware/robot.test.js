const {app, mock, assert} = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
    it('should block robot', () => {
        return app.httpRequest()
            .get('/')
            .set('User-agent', "Baiduspider")
            .expect(403);
    })
});
