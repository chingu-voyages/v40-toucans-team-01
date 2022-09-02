var CategoryValue;

export default function CategoryIcons(props) {
    return (
        <div className="flex justify-center">
          <div className={(props.GF === true) ?  "px-2 py-2" : "hidden"}>  
            <button className={(props.GF === true) ?  ButtonData.content.body[0].className : "hidden"}> {(props.GF === true) ? ButtonData.content.body[0].foodType : ""} </button>
          </div>
          <div className={(props.VG === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.VG === true) ?  ButtonData.content.body[1].className : "hidden"}> {(props.VG === true) ? ButtonData.content.body[1].foodType : ""} </button>
          </div> 
          <div className={(props.V === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.V === true) ?  ButtonData.content.body[2].className : "hidden"}> {(props.V === true) ? ButtonData.content.body[2].foodType : ""} </button>
          </div>
          <div className={(props.DF === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.DF === true) ?  ButtonData.content.body[3].className : "hidden"}> {(props.DF === true) ? ButtonData.content.body[3].foodType : ""} </button>
          </div>
          <div className={(props.NS === true) ?  "px-2 py-2" : "hidden"}>
            <button className={(props.NS === true) ?  ButtonData.content.body[4].className : "hidden"}> {(props.NS === true) ? ButtonData.content.body[4].foodType : ""} </button>       
          </div>
        </div>
    );
  }

const ButtonData = {
  content: {
    body: [
      {
        className: "text-white bg-rose-200  font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center ",
        foodType: "GF"
      },
      {
        className: "text-white bg-red-500 font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "VG"
      },
      {
        className: "text-white bg-yellow-600 font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "V"
      },
      {
        className: "text-white bg-green-800 font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "DF"
      },
      {
        className: "text-white bg-gray-800 font-bold py-2 px-1 w-7 h-7 rounded-full flex justify-center items-center",
        foodType: "NS"
      }
    ]
  }
};