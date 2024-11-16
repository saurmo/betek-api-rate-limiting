import rateLimit from 'express-rate-limit';

// Configuración del rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 solicitudes por IP
  message: 'Demasiadas solicitudes, intente nuevamente más tarde.'
});

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Límite de 5 solicitudes para la ruta de inicio de sesión
  message: 'Demasiados intentos de inicio de sesión. Inténtelo más tarde.'
});


export default limiter