import { Studentenrollmentsystem } from './Assiginment/Studentenrollmentsystem'
import { Moviedatabase } from './Assiginment/MovieDatabase'

import { ChatApplication } from './Assiginment/ChatApplication'
import { RecipeBook } from './Assiginment/ReceipeBook'
import { InventaryManagementSystem } from './Assiginment/InventoryManagementSystem'
import { CalendarAppointments } from './Assiginment/Calendar Appointments'
import { GameCharacter } from './Assiginment/Game Character'
import { EcommerceCart } from './Assiginment/E-commerce Cart'
import { LanguageLearningApp } from './Assiginment/Language Learning App'
import { MusicPlayer } from './Assiginment/Music Player'
import { TaskTracker } from './Assiginment/Task Tracker'
function App () {
  return (<div>
      <h1>Himadeep!!!</h1>
      <Studentenrollmentsystem />
      <Moviedatabase/>
      <ChatApplication/>
      <calcenderManagementSystem /> 
      <RecipeBook/>
      <InventaryManagementSystem/>
      <CalendarAppointments/>
      <GameCharacter/>
      <EcommerceCart/>
      <LanguageLearningApp/>
      <MusicPlayer/>
      <TaskTracker/>
    </div>
  )
}
export default App

