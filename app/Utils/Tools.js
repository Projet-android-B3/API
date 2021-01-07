'use strict';
require('dotenv').config();
const {v4: uuid} = require('uuid');
const semver = require('semver');


// const exec = require('child_process').exec;

// function PromiseExec(app) {
//     return new Promise((resolve, reject) => {
//         let child = exec(app);
//         let stdout = '';
//         let stderr = '';
//
//         child.addListener('error', reject);
//
//         child.stdout.on('data', function (data) {
//             stdout += data;
//         });
//
//         child.stderr.on('data', function (data) {
//             stderr += data;
//         });
//
//         child.addListener('close', (code) => {
//             resolve({ stdout, stderr,  code} );
//         });
//     });
// }


let Tools = {
    checkUpdates: (res, version) => {

        const isOutdated = semver.gt(process.env.LAUNCHER_VERSION, version);
        if (isOutdated) {
            res.send(true);
        } else {
            res.send(false);
        }
    },
    incrementConnectionNb: async (Infos, Client) => {
        const informations = await Infos.findOne({
            where: {
                client_id: Client.id
            }
        });
        await informations.increment({
            'total_connections': 1
        });
        return true;
    },
    // incrementDownloadNb: async (Infos) => {
    //     const informations = await Infos.findAll();
    //     if (informations.length > 0) {
    //         await informations[0].increment({
    //             'download_nb': 1
    //         });
    //     } else {
    //         await Infos.build({
    //             total_connections: 0,
    //             download_nb: 0
    //         });
    //     }
    //     return true;
    // },
    checkNumberConnection: async (client, Pass, Infos) => {

        await Tools.incrementConnectionNb(Infos, client);

        // We get the client pass to know his max number of connections
        const client_pass = await Pass.findOne({
            where: {
                id: client.pass_id
            }
        });

        // We get the client infos to know his number of connections used

        const client_user_connections = await Infos.findOne({
            where: {
                client_id: client.id
            }
        });

        return client_user_connections.total_connections < client_pass.nbConnectionsMax;

    },
    uuid: () => {
        return uuid();
    },

}
module.exports = Tools;