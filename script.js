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
            <option value="Ստուգում իրականացնող հարկային ծառայողների կողմից ներկայացվեցին ծառայողական վկայականները և ստուգման հանձնարարագիրը ծանոթացման: Այնուհետև ժամը 13:56-ին հարկային տեսուչ Տիգրան Ղարիբյանի կողմից ՀԴՄ-ից տպվեց «Z» հաշվետվություն  25500 դրամ ընդհանուր գումարով, որում ներառված չէր կատարված վճարման արժեքը։ Կատարված վճարման արժեքը՝ 950 դրամը, ժամը 13։57-ին մուտքագրվեց ՀԴՄ, տպվեց ՀԴՄ կտրոն (Կ/Հ 00029689) և ժամը 13։58-ին կրկին տպվեց «Z» հաշվետվություն 26450 դրամ ընդհանուր գումարով։ 
            
    Ստուգմամբ պարզվեց, որ տնտեսվարող սուբյեկտի կողմից խախտվել են ՀՀ հարկային օրենսգրքի 381-րդ հոդվածի 3-րդ մասի պահանջները, մասնավորապես  հսկիչ դրամարկղային մեքենա կիրառող կազմակերպությունները, անհատ ձեռնարկատերերը և նոտարները կանխիկ դրամով կամ վճարային քարտերի կամ վճարային տեխնոլոգիաների հիման վրա կիրառվող այլ վճարային գործիքների միջոցով դրամական հաշվարկներ իրականացնելիս պարտավոր են ապրանքներ ձեռքբերողին, աշխատանքներ ընդունողին կամ ծառայություններ ստացողին տրամադրել հսկիչ դրամարկղային մեքենայի կտրոն, ինչպես նաև ՀՀ կառավարության 2020թ. դեկտեմբերի 3-ի թիվ 1976-Ն որոշմամբ հաստատված հավելված 3-ով սահմանված հսկիչ-դրամարկղային մեքենայի կիրառության կանոնների 17-րդ կետի 2-րդ և 3-րդ ենթակետերի պահանջները, մասնավորապես՝ ՀԴՄ կտրոնի չտրամադրումը, այդ թվում ստացված կանխավճարի դիմաց և գնված ապրանքի արժեքի չմուտքագրումը դիտվում է ՀԴՄ-ի կիրառության կանոնների խախտում: ՀՀ հարկային օրենսգրքի 416-րդ հոդվածի 2-րդ մասի համաձայն, հսկիչ դրամարկղային մեքենաների կիրառության կանոնների (բացառությամբ սույն հոդվածի 4-րդ մասում նշված դեպքի) յուրաքանչյուր խախտման համար անհատ ձեռնարկատերը տուգանվում է 200.0 հազար դրամի և տվյալ հարկ վճարողի բոլոր հսկիչ դրամարկղային մեքենաներով նախորդ եռամսյակի ընթացքում արձանագրված շրջանառության 0.5 տոկոսի գումարի հանրագումարի չափով, բայց ոչ ավելի, քան 10 միլիոն դրամը (նախորդ եռամսյակում անհատ ձեռնարկատիրոջ շրջանառությունը կազմել է 7234641 դրամ, որից հաշվարկված 0,5 տոկոսը կազմում է 36173 դրամ, 200000+36173 = 236173)դրամ: Այսպիսով, Արտակ Սահակյան Ա/Ձ -ին առաջադրվում է տուգանք 236173դրամի չափով:">
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







function downloadAllReports() {
    const results = document.querySelectorAll(".result");
    if (results.length === 0) {
        alert("Չկան ստեղծված հաշվետվություններ։");
        return;
    }

    let combinedText = "";

    results.forEach((textarea, index) => {
        if (textarea.value.trim() !== "") {
            combinedText += `<h3>Հաշվետվություն ${index + 1}</h3>` +
                            `<p>${textarea.value.replace(/\n/g, "<br>")}</p><br><br>`;
        }
    });

    if (combinedText === "") {
        alert("Բովանդակություն չկա։");
        return;
    }

    const htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>Reports</title></head><body>
            ${combinedText}
        </body></html>`;

    const blob = new Blob(['\ufeff', htmlContent], {
        type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "AllReports.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

