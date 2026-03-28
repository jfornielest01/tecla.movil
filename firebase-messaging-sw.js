importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCAWM6KyEYGozVP6JfY_EpGv6kGxjWzzPk",
    authDomain: "studio-4610881504-8afcf.firebaseapp.com",
    projectId: "studio-4610881504-8afcf",
    messagingSenderId: "330090444658",
    appId: "1:330090444658:web:0ab0c98f2ab0235af74feb"
});

const messaging = firebase.messaging();

// Notificación cuando la app está CERRADA o en SEGUNDO PLANO
messaging.onBackgroundMessage((payload) => {
    console.log('Mensaje en background:', payload);
    const notificationTitle = "Nuevo mensaje en TECLA";
    const notificationOptions = {
        body: payload.data.asunto || "Pulsa para leer el mensaje",
        icon: "https://i.ibb.co/bg2VLBMj/fdm-sdmkd.webp", // Asegúrate de tener esta imagen o cámbiala
        badge: "https://i.ibb.co/bg2VLBMj/fdm-sdmkd.webp",
        data: { url: "/mensajeria.html" } 
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Al hacer clic en la notificación, abre la app
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
