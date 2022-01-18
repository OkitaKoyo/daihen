//
// 　問題点
// window.onload = function () {
//     const body = document.body;
//     const sshot = `<a href="" id="sshot" download="html_sshot.png">スクリーンショットをダウンロード</a>`;
//     body.insertAdjacentHTML("beforeend", sshot);
//     html2canvas(document.body).then(function (canvas) {
//         var imgData = canvas.toDataURL();
//         document.getElementById("sshot").href = imgData;
//     });
// }
function buttonclick(){

    (() => {
      const src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"
      const sc = document.createElement("script")
      sc.type="text/javascript"
      sc.src=src
      sc.onload = () => {
        html2canvas(document.body, {
          onrendered: (canvas) => {
            const imgageData = canvas.toDataURL("image/png")
            const newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream")
            const element = document.createElement('a')
            element.setAttribute('href', newData)
            element.setAttribute('download', 'screen.png')
            element.style.display = 'none'
            document.body.appendChild(element)
            element.click()
            document.body.removeChild(element)
          }
        })
      }
      document.body.appendChild(sc)
    })()

}
