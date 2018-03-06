var Announcement = require('announce-redis');
module.exports = function(app, opts) {
    var redis = app.get('redis');
    if (!redis) {
        console.error('pomelo-announce has not fond redisClient');
        return null;
    }
    var ancMnt = new Announcement(redis, opts);
    app.set('announcement', ancMnt, true);
    return ancMnt;
};
