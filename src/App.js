import { useState } from 'react'

function App() {
  console.log("FLAMES 🔥")

  const [firstName, setfirstName] = useState("")
  const [secondName, setsecondName] = useState("")
  const [match, setMatch] = useState("")
  const [magicNum, setMagicNum] = useState(0)

  const database = {
    1: 'FRIENDS 👨‍👦‍👦',
    2: 'LOVERS 💕',
    3: 'ADMIRERS 🥰',
    4: 'MARRIAGE 💍',
    5: 'ENEMIES 🗡',
    0: 'SECRET LOVERS 🖤',
  }

  const search = () => {
    setMatch("")
    let base
    let target

    if (firstName.length > secondName.length) {
      base = secondName
      target = firstName
    } else {
      base = firstName
      target = secondName
    }

    base = base.toLowerCase()
    target = target.toLowerCase()

    let total_count = base.length + target.length
    let asterisk_count = 0

    for (let base_index in base) {
      for (let target_index in target) {

        let base_char = base.charAt(base_index)
        let target_char = target.charAt(target_index)

        if (base_char === target_char) {

          base = base.replace(base_char, "*")
          target = target.replace(target_char, "*")

          asterisk_count += 2
          break
        }

      }

    }

    let magic_num = total_count - asterisk_count

    setMatch(database[magic_num % 6])
    setMagicNum(magic_num)
  }

  const formatName = (name) => name.replace(/^\w/, (c) => c.toUpperCase())


  return (
    <div className="App">
      <center>
        <div>
          <p className="card-text bg-success">F L A M E S 🔥</p>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addofirstName">First name</span>
          <input onChange={(e) => {
            setfirstName(formatName(e.target.value))
            setMatch("")
          }} value={firstName} type="text" className="form-control" placeholder="Enter name..." aria-label="Username" aria-describedby="basic-addofirstName" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addofirstName">Second name</span>
          <input onChange={(e) => {
            setsecondName(formatName(e.target.value))
            setMatch("")
          }} value={secondName} type="text" className="form-control" placeholder="Enter name..." aria-label="Username" aria-describedby="basic-addofirstName" />
        </div>

        <button onClick={search} type="button" className="btn btn-success">Match</button>

        <br />
        <br />

        {
          match && <div>
            <p>{firstName} and {secondName} are {match}</p>
            <br />

            <button type="button" class="btn btn-warning">
              Magic number <span class="badge bg-success">{magicNum}</span>
            </button>

          </div>
        }
      </center>
    </div>
  );
}

export default App;
