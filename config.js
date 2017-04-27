const env = process.env;

const nodeEnv = env.NODE_ENV || 'development';

var envVar = {
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
}

exports.nodeEnv = nodeEnv;
exports.envVar = envVar;


// module.exports = {
//     nodeEnv: env.NODE_ENV || 'development',
//     envVar: {
//         port: env.PORT || 8080,
//         host: env.HOST || '0.0.0.0',
//         get serverUrl() {
//             return `http://${this.host}:${this.port}`;
//         }
//     }
// }

// export const nodeEnv = env.NODE_ENV || 'development';
// export default {
//     port: env.PORT || 8080,
//     host: env.HOST || '0.0.0.0',
//     get serverUrl(){
//         return `http://${this.host}:${this.port}`;
//     }
// }