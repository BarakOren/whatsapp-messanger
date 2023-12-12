import './App.css';
import list from "./places-of-הובלות-בתל-אביב-יפו.json"

function App() {
  list.map((item) => {
    console.log(item)
  })



  return (
    <div className="App">
    {list.map((item, i) => {

      const before = '972' + item.phone.replace("-", "");
      const phoneNumber2 = before.replace("-", "");

      var text = "אהלן ערב טוב"


      var link = `https://api.whatsapp.com/send?phone=${phoneNumber2}&text=${text}&send=1`
      var link2 = `https://wa.me/${phoneNumber2}?text=${text}`      
  

      return (
        <div className='row'>
        <p>{i + 1}</p>
        <a href={link2} target="_blank">{link2}</a>
        </div>
      )
    })}
    </div>
  );
}

export default App;
