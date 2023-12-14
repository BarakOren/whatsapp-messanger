import './App.css';
import list from "./first.json"

function App() {
  list.map((item) => {
    console.log(item)
  })



  return (
    <div className="App">
    {list.map((item, i) => {

      const before = '972' + item.phone.replace("-", "");
      const phoneNumber2 = before.replace("-", "");

      var text = `היי מה שלומך? 
שמי ברק אני אמן גרפיטי ואשמח להציע לך ציור גרפיטי מותאם אישית לעסק - על המשאית שלך. 
אם גם לך נמאס מהמדבקות המשעממות שאף אחד לא שם לב אליהן, אולי השירות יתאים לך
הגרפיטי המותאם לעסק יהפוך את המשאית שלך לפרסומת ניידת, שבאמת עושה עבודה. 

תוכל לראות עבודות באתר https://bit.ly/41oB3T9

לפרטים נוספים תשאיר לי הודעה!
      `


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
