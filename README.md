# IoT Test Web App

Application web de test simple (HTML/CSS/JS) pour verifier rapidement un deploiement.

## Lancer en local

Ouvrir `index.html` dans un navigateur.

## Lancer avec Docker

```bash
docker build -t iot-test-web .
docker run --rm -p 8080:80 iot-test-web
```

Puis ouvrir `http://localhost:8080`.
