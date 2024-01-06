const os = require('node:os');



setInterval(() => {

    const { arch, platform, totalmem, freemem } = os;


    const tRam = totalmem() / (1024 * 1024 * 1024);
    const fRam = freemem() / (1024 * 1024);
    const uso = ((tRam / fRam) * 100).toFixed(2)
    const status = {
        os: arch(),
        platform: platform(),
        totalrama: `${Math.trunc(tRam)} - GB`,
        freeRam: `${Math.trunc(fRam)} - MB`,
        uso: `${uso}%`

    }
    console.clear()
    console.table(status)
    exports.status = status;

}, 1000)

