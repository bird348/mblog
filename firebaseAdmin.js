const admin = require("firebase-admin");

const serviceAccount = {
    type: "service_account",
    project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
    private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIPBVawM0vUli+\nxGoWUaSkfBAHoSCeh3d+p+4VAcopNXxp4Z8w+GNZbWl+FczAx2DZMsikVauwOfNb\nF5QuTU+Iq/lTZmcijE52E17saiRxyCwGtzXfc0knQqrH6NMhYIrUgr31E10qT6lk\nlU9n+pprVyfhIcBV22jK0NrZiEZdtB4VdhSaQa/RiZHJdxCrpg/p+I42s55dNKqF\nx9R+DHsroY+herqzx2iwTAXiTe8w/4axPrTsYy/wRWjMws5N+nSTDYN/Xy07Y2qH\nNvIt5dChRT6p40KYBSZIXfECabiECMvPyxCdPBSEuvQHn7Q+8suJSzbL8+cIQGOi\nE8mru3HNAgMBAAECggEAHB5d5FTza3wNpNp5yGEWNRgL+zpMFZ8R74ofE7mg3Vka\nu9a4j3yuHPKRsChZDNBi4BVy2isCtXhp3Yap4zetndSCqozUmmQoJ4owWBROwmC5\nGAdV7CdpJDeHOpQORB9l15J1oQsjV+wAbnTORhyJ312JpuKhuxzY8jRSq14o/YLs\naKJlNntTRQLXduFEAYY2RzMDjSS91wFWil7DwVHQ8J4HbzxzLVjJE8V00LP8Qksp\nFA7USgvRoSzQE7uAyoql1KfN18Z6tRnTJxbgh/0ty4itU2UFYMAZorqeRJs2GFct\nfQ1D1jYUArOBcEhyS+C3VX9gDmJ7jneLm+93Mdo+YQKBgQDjlIS12UczHLlnY7ZD\nenukABcnpm+Iz9trKCnp/pkxHegMXWaQI/1h8mRrZyW7j1oqGUB9QSiBDzxzv4PA\nScCUvxwxsPIk7qFlQdZ5/IshvchDczqdkZA51jzbWodD1efq/K7gkyJOwDDUY/F+\nCSKQJAsKgGeKXXZ1tMXMkTPKrQKBgQDhPVybJz5vbbf5HWPCYmMxbOhlezU1vFNJ\nX65BK8UlMuw9wK9XeEAtkl1HGO+4yXzvL7ELpWmh0AGO3EmW6bnP0zrGgBRTrDcn\nnpi+0m6unlLn+gCyRamv8XjS+VaP7L4AzM18EaQowg52Z3ftFg3Ik/SPWwGPe12+\nLk8leh9HoQKBgQDd3GHsLh/9MhmFM23yJqv2W6g3HUhKZeiQdJ034t5RRch8lWlx\nR8SzAeznz6y3Rq8tr2RxN15XQxU5+hBlGwFFgXHo94l4e7KX1jFSxuKUSEG9j84q\n4kdqOvMlHQIVHal0KlYJ1SZzA2YXCD/bEOjDAIBLApbuCuN7KHpUTZHiGQKBgHs0\nHVug873vvho9wTuqpad7cwNPiaODB+uyspZjYsseN6rvovmthS1oSi2Brl7dl8Ed\nzTIZoNYp+TAzvu0Vm9XaLOQ3WucJ5IF/dv2qDXDmmWLalVbuVAsxgm2khXzkemnl\nnOCoparFuzN5FVhSH+f/Rl7D4O6jBHvqyNAvJL0BAoGARk/ndxeDtx5NxF6JO3zl\n/K4mRK0cMhdpW9/AQKtwGnUmGlrP0ALN86BhE2TZcuXvuEMKzhC5cf9ngTi6Vtzx\nw/YuG+G3h/RkL8wpRpyNUysIS3VoK6c3AqG868kBvFvzUveWMJM+mpy85BwxwHIe\np82LoBFmGi8Ec7nzAfGGxkA=\n-----END PRIVATE KEY-----\n",
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    auth_uri: process.env.NEXT_PUBLIC_AUTH_URL,
    token_uri: process.env.NEXT_PUBLIC_TOKEN_URL,
    auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_AUTH_PROVIDER,
    client_x509_cert_url: process.env.NEXT_PUBLIC_CLIENT
  }

export const verifyIdToken = (token) => {
    if(!admin.apps.length) {
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.NEXT_PUBLIC_DB_URL,
        });
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
        throw error;
    });
}

