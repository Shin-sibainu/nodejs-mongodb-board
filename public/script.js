// console.log(axios);
// data fetching
const inputTextDOM = document.getElementById("inputTitle");
const inputContentDOM = document.getElementById("inputContent");
const submitButtonDOM = document.getElementById("submitButton");
//formDomを追加する。
let inputText = "";
let contentText = "";

//最初はThreadを全て読み込む
const getAllThreads = async () => {
  try {
    const allThreads = await axios.get("/api/v1/threads");
    console.log(allThreads);
  } catch (err) {
    console.log(err);
  }
};

getAllThreads();

//タイトルと内容を打ち込んだらpostメソッドを実装してデータ追加。
inputTextDOM.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  inputText = e.target.value;
});
inputContentDOM.addEventListener("change", (e) => {
  contentText = e.target.value;
});

submitButtonDOM.addEventListener("click", async () => {
  if (inputText && inputContent) {
    console.log("success");
    //postメソッドで送信する。

    try {
      console.log(inputText);
      await axios.post("/ap1/v1/thread", {
        title: inputText,
        content: inputContent,
      });
      getAllThreads();
    } catch (err) {
      console.log(err);
    }

    inputText = "";
    contentText = "";
    inputTextDOM.value = "";
    inputContentDOM.value = "";
  } else {
    console.log("error");
  }
});
