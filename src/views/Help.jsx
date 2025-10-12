import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Help = () => {
  return (
    <main>

      <header className="header">
        <img width={50} src={logo} alt="logo de whatsapp" />
        <div>
          <h2>ChatApp Clone</h2>
          <h4>Centro de Ayuda y Documentación</h4>
        </div>
      </header>
      <div>
        <div className="title">
          <h1 className="title-span">
            Todo lo que necesitas saber sobre <span> nuestro Chat App </span>
          </h1>
            <h3>
              Descubre cómo funciona, las tecnologías que lo impulsan y hacia dónde nos dirigimos.
            </h3>
        </div>
      </div>
      <div className="wrapper">
      <div className="cont-operation">
       <div className="operation">
        <div> 
          <h2>
            Funcionamiento general del chat
          </h2>
          <p>
            Nuestro clon de WhatsApp ofrece una experiencia de mensajería básica y funcional. 
            La aplicación permite a los usuarios comunicarse mediante mensajes de texto y gestionar sus contactos de forma sencilla.
          </p>
        </div>
      </div>

        <div className="operations">
        <div className="box-op">
          <h3>
            Mensajería Instantánea
          </h3>
          <p>
            Envía y recibe mensajes de texto con tus contactos de manera simple y directa.
          </p>
        </div>

        <div className="box-op">
          <h3>
            Gestión de contactos
          </h3>
          <p>
            Agrega o quita contactos fácilmente para mantener tu lista organizada.
          </p>
        </div>

        <div className="box-op">
          <h3>
            Autenticación
          </h3>
          <p>
            Inicia sesión de forma segura con tu contraseña personal.
          </p>
        </div>

        <div className="box-op">
          <h3>
            Privacidad
          </h3>
          <p>
            Confirmación de lectura para saber cuándo tus mensajes han sido leídos.
          </p>
        </div>

        </div>

       <div className="characteristics">
          <h4> Características Principales</h4>
          <ul>
            <li>
            <span>
               Envío y recepción de mensajes de texto
            </span>
            </li>

            <li>
            <span>
               Agregar y eliminar contactos
            </span>
            </li>

            <li>
            <span>
               Sistema de inicio de sesión con contraseña
            </span>
            </li>

            <li>
            <span>
               Interfaz intuitiva y fácil de usar
            </span>
            </li>

          </ul>
        </div>
        </div>
        </div>

<div className="wrapper"> 
  <div className="cont-technologie">
        <div className="technologie">
          <h2>
            Tecnologías Utilizadas
          </h2>
          <p>
            Este proyecto está construido con tecnologías modernas
             y robustas que garantizan una experiencia rápida, segura y escalable.
          </p>
        </div>
<div className="technologies">
        <div className="box-techno">
          <h3>
            React + JavaScript
          </h3>
          <p>
            Framework frontend moderno y flexible 
            para crear interfaces de usuario interactivas.
          </p>
        </div>

        <div className="box-techno">
          <h3>
            Vite
          </h3>
          <p>
            Build tool ultrarrápido que optimiza 
            el desarrollo y la producción.
          </p>
        </div>

        <div className="box-techno">
          <h3>
            CSS
          </h3>
          <p>
            Estilos puros en cascada para diseños personalizados
            y control total de la apariencia.
          </p>
        </div>

        <div className="box-techno">
          <h3>
            JSON
          </h3>
          <p>
            Formato ligero de intercambio de datos, fácil de leer 
            y escribir para humanos y máquinas.
          </p>
        </div>
      </div>
     <div className="stack-tecnic">
          <h4>Stack Técnico Completo</h4>
          <ul>
            <li>
              <span>
                React
              </span>
            </li>
            <li>
              <span>
                Vite
              </span>
            </li>
            <li>
              <span>
                JavaScript
              </span>
            </li>
            <li>
              <span>
                CSS
              </span>
            </li> 
            <li>
              <span>
                JSON
              </span>
            </li>              
          </ul>
      </div>
   </div>
  </div>

<div className="wrapper">
  <div className="cont-future">
    <div className="future">
          <h2>
          Posibles Mejoras Futuras
          </h2>
          <p>
          Estamos comprometidos con la mejora continua de la aplicación. 
          Aquí están algunas de las características que planeamos implementar en futuras versiones.
          </p>
    </div>
      <div className="futures">
        <div className="box-future">
          <h3>
            Llamadas de Voz y Video
          </h3>
          <p>
            Integración de WebRTC para permitir llamadas de audio
            y video de alta calidad entre usuarios.
          </p>
        </div>

        <div className="box-future">
          <h3>
            Personalización Avanzada
          </h3>
          <p>
            Temas personalizables, fondos de chat, 
            y opciones de accesibilidad mejoradas.
          </p>
        </div>

        <div className="box-future">
          <h3>
            Estados y Stories
          </h3>
          <p>
          Función para compartir estados temporales, por 24 hs,
          con fotos, videos y texto.
          </p>
        </div>

        <div className="box-future">
          <h3>
            Compartir Ubicación en Tiempo Real
          </h3>
          <p>
            Opción para compartir tu ubicación en tiempo real 
            con contactos seleccionados.
          </p>
        </div>
    </div> 
  </div>
</div>
<div className="cont-footer">
     <footer className="footer">
      <h2>¿Listo para comenzar?</h2>
      <button><p> Ir a </p> <Link to="/chat">Chat</Link></button>
     </footer>
</div>
     
    </main>
    )
}

export default Help