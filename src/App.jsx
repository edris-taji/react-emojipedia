import "./App.css";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

function createEntry ( emojiEntry )
{
  return <Entry
    key={ emojiEntry.id }
    emoji={ emojiEntry.emoji }
    name={ emojiEntry.name }
    meaning={ emojiEntry.meaning }
  />
}

function App ()
{
  return (
    <div>
      <h1>Emojipedia</h1>
      { emojipedia.map( createEntry ) }
    </div>
  )
};

export default App;