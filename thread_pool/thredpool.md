What is a Thread Pool in Node.js?

        Node.js is single-threaded for JavaScript execution, but it still needs to handle heavy or blocking tasks (like file I/O, DNS lookup, crypto, compression).

        To do that, Node.js uses a thread pool provided by libuv.

        Thread pool = a fixed set of worker threads that execute expensive tasks in parallel so the main event loop doesn’t block.




Why Node.js needs a thread pool

        If Node tried to do these tasks on the main thread, your app would freeze.

        Tasks that use the thread pool:

        File system (fs)

        Crypto (crypto.pbkdf2, scrypt)

        DNS (dns.lookup)

        Zlib compression

        Some native addons

        ✅ Network I/O (HTTP, sockets) does NOT use the thread pool
        ✅ Timers & promises do NOT use the thread pool



Default thread pool size
        4 threads (by default)

You can change it:

        UV_THREADPOOL_SIZE=8 node app.js



How the thread pool works (conceptually)

        JS runs on the main thread

        Blocking work is delegated to libuv thread pool

        Worker thread executes the task

        Result is sent back via event loop callback




Thread pool vs Worker threads (important distinction)
        Feature	Thread Pool (libuv)	Worker Threads
        Used by	fs, crypto, dns , compression	Your code
        Size	Default 4	Configurable
        JS execution	❌	✅
        Best for	I/O heavy	CPU heavy