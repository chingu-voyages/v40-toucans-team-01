var CategoryValue;

export default function CategoryIcons(props) {
    return (
        <div className="flex justify-center text-sm">
          <div className={(props.GF === true) ?  "px-2 py-2" : "hidden"}>  
            <button className={(props.GF === true) ?  ButtonData.content.body[0].className : "hidden"} style={{backgroundColor:"#ffded6"}}> {(props.GF === true) ? ButtonData.content.body[0].foodType : ""} </button>
          </div>
          <div className={(props.VG === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.VG === true) ?  ButtonData.content.body[1].className : "hidden"} style={{backgroundColor:"#f74639"}}> {(props.VG === true) ? ButtonData.content.body[1].foodType : ""} </button>
          </div> 
          <div className={(props.V === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.V === true) ?  ButtonData.content.body[2].className : "hidden"} style={{backgroundColor:"#d56638"}}> {(props.V === true) ? ButtonData.content.body[2].foodType : ""} </button>
          </div>
          <div className={(props.DF === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.DF === true) ?  ButtonData.content.body[3].className : "hidden"} style={{backgroundColor:"#003811"}}> {(props.DF === true) ? ButtonData.content.body[3].foodType : ""} </button>
          </div>
          <div className={(props.NS === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.NS === true) ?  ButtonData.content.body[4].className : "hidden"} style={{backgroundColor:"#2a2b2a"}}> {(props.NS === true) ? ButtonData.content.body[4].foodType : ""} </button>       
          </div>
        </div>
    );
  }

const ButtonData = {
  content: {
    body: [
      {
        className: "text-black font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center", 
        foodType: "GF"       
      },
      {
        className: "text-white font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "VG"
      },
      {
        className: "text-white font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "V"
      },
      {
        className: "text-white font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "DF"
      },
      {
        className: "text-white font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "NS"
      }
    ]
  }
};