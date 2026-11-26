# Frida certificate setup

[Back to the command index](README.md)

After extracting `burpsuite.cer`, follow these steps to use it for SSL pinning bypass:

## 1. Convert the certificate to DER

```bash
openssl x509 -in burpsuite.cer -out cert-der.crt -outform DER
openssl x509 -inform der -in cert.der -out burp.pem
```

## 2. Push the certificate to the device

```bash
adb push cert-der.crt /data/local/tmp/
adb shell chmod 644 /data/local/tmp/cert-der.crt
```

## 3. Load the certificate in a Frida script

Update the Frida script to load `cert-der.crt`:

```js
var fileInputStream = FileInputStream.$new("/data/local/tmp/cert-der.crt");
var bufferedInputStream = BufferedInputStream.$new(fileInputStream);
```

Make sure the full chain (including `CertificateFactory`, `TrustManager`, etc.) is correctly hooked.
