

// Issue with Chrome and 127.0.0.1
// https://developer.chrome.com/blog/private-network-access-preflight/

// Windows install

// choco install openssl
// or
// winget install -e --id ShiningLight.OpenSSL

// mac install
// brew install openssl@1.1


// openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem