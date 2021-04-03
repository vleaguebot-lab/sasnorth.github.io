const output_csv = document.getElementById(`${csv_name}`);

function csv_data(dataPath) {
    const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
    request.addEventListener('load', (event) => { // ロードさせ実行
        const response = event.target.responseText; // 受け取ったテキストを返す
        csv_array(response); //csv_arrayの関数を実行
    });
    request.open('GET', dataPath, true); // csvのパスを指定
    request.send();
}

function csv_array(data) {
    const dataArray = []; //配列を用意
    const dataString = data.split('\n'); //改行で分割
    for (let i = 0; i < dataString.length; i++) { //あるだけループ
        dataArray[i] = dataString[i].split(',');
    }
    // console.log(dataArray);
    let insertElement = ''; //テーブルタグに表示する用の変数
    insertElement += '</tr>';
    for (let j = 0; j < dataString.length; j++) {
        insertElement += '<tr>';
        dataArray[j].forEach((childElement) => {
            if (j == 0) {
                insertElement += `<th>${childElement}</th>`
            } else {
                insertElement += `<td>${childElement}</td>`;
            }
        });
        insertElement += '</tr>';
    };
    // dataArray.forEach((element) => { //配列の中身を表示
    //     insertElement += '<tr>';
    //     element.forEach((childElement) => {
    //         insertElement += `<td>${childElement}</td>`
    //     });
    //     insertElement += '</tr>';
    // });
    output_csv.innerHTML = insertElement; // 表示
}
csv_data(`${dir}data/${division}/${csv_name}.csv`); // csvのパス
console.log(output_csv);