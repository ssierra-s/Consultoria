# Sistema de consultoria en redes sociales

Sistema de Consultoría – Prototipo Mínimo Viable

📌 Descripción

Este proyecto corresponde a un sistema de consultoría desarrollado como un prototipo mínimo viable (PMV).
El objetivo es crear un producto confiable, ágil, eficiente y resistente, que aproveche tecnologías modernas en backend, frontend y base de datos, bajo un enfoque de arquitectura de microservicios y componentes reutilizables.

🚀 Tecnologías

MySQL → Servicio de base de datos ampliamente utilizado, accesible y eficiente, que permite gestionar datos de forma local o en la nube.

Spring Boot (Java) → Framework ligero y modular que facilita la construcción de aplicaciones del lado del servidor, con capacidad de escalar y manejar múltiples conexiones de manera optimizada.

Angular (TypeScript) → Framework para aplicaciones web dinámicas e interactivas, con soporte para renderizado en cliente y servidor, lo que mejora el rendimiento y SEO.

PrimeNG → Biblioteca de componentes UI para Angular, que permite crear interfaces de usuario atractivas, accesibles y funcionales en poco tiempo.

🏗️ Arquitectura
🔹 Arquitectura de microservicios (Backend – Spring Boot)

División del backend en servicios independientes, cada uno con una funcionalidad específica.

Cada microservicio es autónomo → se puede desplegar, actualizar y gestionar sin afectar el resto del sistema.

Permite un desarrollo ágil, escalable y modular.

🔹 Arquitectura basada en componentes (Frontend – Angular + PrimeNG)

Organización modular mediante NgModules.

Uso de componentes reutilizables para la interfaz de usuario.

Servicios para la lógica de negocio y compartición de datos entre componentes.

Sistema de enrutamiento SPA (Single Page Application) para navegación fluida.

Flexibilidad gracias a directivas, formularios e inyección de dependencias (DI).

⚙️ Instalación

Clonar el repositorio:

git clone https://github.com/ssierra-s/Consultoria.git
cd Consultoria

Backend (Spring Boot)
cd backend
./mvnw spring-boot:run

Frontend (Angular)
cd frontend
npm install
npm start


Accede en el navegador a:
👉 http://localhost:4200 (Frontend)
👉 http://localhost:8080 (Backend API)
