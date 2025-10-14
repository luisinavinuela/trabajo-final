import { useState } from "react"
import { useChat } from "../context/ChatContext"
import { Link, useNavigate } from "react-router-dom"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [chatBgColor, setChatBgColor] = useState("");

  // 1. Obtenemos del contexto todo lo necesario
  const { users, selectedUser, setUsers } = useChat()

  // 2. Buscamos el usuario activo
  const user = users.find(u => u.id === selectedUser)

  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }

  // 3. Manejo del input
  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  // 4. Cuando enviamos el formulario
  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    // ✅ Actualizamos el estado de manera INMUTABLE
    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers) // esto dispara el useEffect del contexto que guarda en localStorage

    setMsg("")
  }

    const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }
  
   const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }


  return (
 <>
      {
        showPopup === true && <section className="cont-popup">
          <div className="popup">
            <h2>Configuración de Chat</h2>
            <h3>Cambiar tema:</h3>
            <select name="" id="">
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
            </select><br></br>
            <h3>Color de fondo del chat:</h3>
              <input
                type="color"
                onChange={(e) => setChatBgColor(e.target.value)}
              />
            <h3>Privacidad:</h3>
            <h5>Confirmación de lectura</h5>
              <label className="switch">
               <input type="checkbox"/>
               <span className="slider"></span>
             </label>
            <button className="closesesion" onClick={handleClosePopup}>Cerrar</button>
          </div>
       </section>
      }
      <div className="chat">
        <header className="chat-header">
          <div>
            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <strong>{user.name}</strong>
              {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
            </div>
          </div>
       
        <div className="chat-actions">
            <button title="Camera">📷</button>
            <button title="Gallery">🖼️</button>
            <button title="Settings" onClick={handleShowPopup}>⚙️</button>
            <Link to="/help" title="Help">❓</Link>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </header>

          <section
            className="chat-messages"
            style={{ backgroundColor: chatBgColor }}
          >
          {user.messages.map((message) => (
            <div className="message" key={message.id}>
              <p>{message.text}</p>
              <span className="time">{message.time}</span>
            </div>
          ))}
        </section>

        <footer className="chat-footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter text here..."
              onChange={handleChange}
              value={msg}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>
    </>
  )
}