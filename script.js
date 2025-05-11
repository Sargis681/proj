let reportCount = 0;

function addReport() {
    reportCount++;

    const container = document.createElement("div");
    container.className = "report-block";

    const uniqueId = `customDate-${reportCount}`;

    container.innerHTML = `
        <h3>Հաշվետվություն ${reportCount}</h3>
        <label>Ամսաթիվ: <input type="text" id="${uniqueId}" class="data" value="23.04.2025"></label><br>
        <label>Ժամ: <input type="time" class="time" value="11:05"></label><br>
        <label>Հասցե: <input type="text" class="address" value="Էրեբունի թաղամաս Դավիթ Բեկի"></label><br>
        <label>Անուն: <input type="text" class="name" value="Հարկային տեսուչ Հրանտ Բլյան"></label><br>
        <label>ԿՀ: <input type="text" class="kh" value="(ԿՀ/00005445)"></label><br>
        <label>Կազմակերպություն: <input type="text" class="organization" value="Ֆազ Հայրիկյան"></label><br>
        <label>ՀՎՀՀ: <input type="text" class="hvhh" value="(ՀՎՀՀ 23336018) Ա/Ձ-ին"></label><br>
        <label>Գործունեության տեսակ: <input type="text" class="gortuneutyanTesak" value="ավտոմեքենաների սպասարկման կետից"></label><br>
        <label>Գնումի նկարագրություն:</label><br>
        <textarea class="gnum" rows="3" style="width:100%;">կատարվեց հսկիչ գնում 2000 դրամի չափով՝ ...</textarea><br>

        <label>Արդյունք:
          <select class="finalResult">
            <option value="">Խախտում չի հայտնաբերվել</option>
            <option value="Ստուգում իրականացնող հարկային ծառայողների կողմից  տեսաձայնագրության ներքո ներկայացվեցին ծառայողական վկայականները և ստուգման հանձնարարագիրը ծանոթացման: Այնուհետև ժամը 13:56-ին հարկային տեսուչ Տիգրան Բոկսյանի կողմից ՀԴՄ-ից տպվեց «Z» հաշվետվություն՝ 28500 դրամ ընդհանուր գումարով, որում ներառված չէր կատարված վճարման արժեքը։ Կատարված վճարման արժեքը՝ 530 դրամը, ժամը 13:25-ին մուտքագրվեց ՀԴՄ, տպվեց ՀԴՄ կտրոն (Կ/Հ 0002559) և ժամը 13:58-ին կրկին տպվեց «Z» հաշվետվություն՝ 26450 դրամ ընդհանուր գումարով։">
                Խախտում հայտնաբերվել է և տուգանվել է
            </option>
          </select>
        </label><br><br>

        <button onclick="generateText(this)">Ստեղծել հաշվետվություն</button><br>
        <textarea class="result" style="width:100%; height:200px; margin-top:10px;"></textarea>
        <hr>
    `;

    document.getElementById("reports").appendChild(container);

    // Apply flatpickr to the newly added date input
    flatpickr(`#${uniqueId}`, {
        dateFormat: "d.m.Y",
        defaultDate: "23.04.2025"
    });
}

function generateText(button) {
    const container = button.closest(".report-block");

    const data = container.querySelector(".data").value;
    const time = container.querySelector(".time").value;
    const address = container.querySelector(".address").value;
    const name = container.querySelector(".name").value;
    const organization = container.querySelector(".organization").value;
    const hvhh = container.querySelector(".hvhh").value;
    const gortuneutyanTesak = container.querySelector(".gortuneutyanTesak").value;
    const gnum = container.querySelector(".gnum").value;
    const kh = container.querySelector(".kh").value;
    const finalResult = container.querySelector(".finalResult").value;

    const textContext = 
`1. ${name} կողմից ${data} թ-ին, ժամը ${time}-ին, ${address} հասցեում գործունեություն իրականացնող ${organization} ${hvhh} պատկանող ${gortuneutyanTesak} ${gnum} տրամադրվեց ՀԴՄ կտրոն ${kh}։

${finalResult}`;

    container.querySelector(".result").value = textContext;
}